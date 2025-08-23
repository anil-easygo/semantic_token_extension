(() => {
  // ===== Settings =====
  const HOTKEY = "i"; // Cmd+I / Ctrl+I to toggle
  const ENABLE_ATTR = "data-sti-enabled";
  const CLASS_PREFIX = "ds-";
  const CLASS_PATTERN = /\.ds-([a-z]+)-([a-z0-9-]+)/i;
  const CSS_PROP_KEYS = ["font", "font-family", "font-weight", "font-size", "line-height"];
  
  // Enhanced token patterns for various design systems
  const TOKEN_PATTERNS = [
    /^--ds-/,           // Design System tokens
    /^--color-/,        // Color tokens
    /^--spacing-/,      // Spacing tokens
    /^--typography-/,   // Typography tokens
    /^--radius-/,       // Border radius tokens
    /^--shadow-/,       // Shadow tokens
    /^--border-/,       // Border tokens
  ];

  // ===== State =====
  let inspectMode = false;
  let pinned = false;
  let lastHover = null;
  let chipEl = null;

  // Indexes
  const classToToken = new Map(); // "ds-body-md" -> "--ds-body-md"
  const ruleIndex = [];           // [{ sel: ".article p", token:"--ds-body-md", order:N }]

  // Expose for quick console debugging
  Object.defineProperty(window, "__stiTokenIndex", { 
    get: () => ({ 
      classToToken, 
      ruleIndex,
      stats: {
        totalTokens: classToToken.size,
        totalRules: ruleIndex.length,
        inspectMode,
        pinned,
        tokenPatterns: TOKEN_PATTERNS.map(p => p.source)
      }
    }) 
  });

  // ===== UI =====
  function ensureChip(){
    if(!chipEl){
      chipEl = document.createElement("div");
      chipEl.className = "sti-token-chip";
      chipEl.setAttribute("role", "tooltip");
      chipEl.setAttribute("aria-live", "polite");
      chipEl.setAttribute("aria-label", "Design token information");
      chipEl.style.display = "none";
      document.documentElement.appendChild(chipEl);
    }
    return chipEl;
  }
  function showChipAt(x,y,html,makePinned){
    const chip = ensureChip();
    
    // Add copy button for pinned chips
    if (makePinned) {
      const tokenMatch = html.match(/<strong>(.*?)<\/strong>/);
      const tokenName = tokenMatch ? tokenMatch[1] : '';
      const copyBtn = `<button class="sti-copy-btn" onclick="copyTokenToClipboard('${tokenName}')" title="Copy token name">📋</button>`;
      html += copyBtn;
    }
    
    chip.innerHTML = html;
    chip.style.left = x + "px";
    chip.style.top  = y + "px";
    chip.style.display = "block";
    if (makePinned) {
      chip.classList.add("sti-pinned");
      chip.style.pointerEvents = "auto";
    } else {
      chip.classList.remove("sti-pinned");
      chip.style.pointerEvents = "none";
    }
  }
  
  // Global function for clipboard operations
  window.copyTokenToClipboard = async (tokenName) => {
    try {
      await navigator.clipboard.writeText(tokenName);
      // Show success feedback
      const chip = ensureChip();
      const originalHTML = chip.innerHTML;
      chip.innerHTML = originalHTML.replace('📋', '✅');
      setTimeout(() => {
        chip.innerHTML = originalHTML;
      }, 1000);
    } catch (error) {
      console.warn('TokenPeek: Failed to copy to clipboard:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = tokenName;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      // Show success feedback
      const chip = ensureChip();
      const originalHTML = chip.innerHTML;
      chip.innerHTML = originalHTML.replace('📋', '✅');
      setTimeout(() => {
        chip.innerHTML = originalHTML;
      }, 1000);
    }
  };
  
  function hideChip(){ if(chipEl) chipEl.style.display="none"; }
  function outline(el){
    if (lastHover) lastHover.classList.remove("sti-outline");
    if (el && !pinned) el.classList.add("sti-outline");
    lastHover = el;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" }[c]));

  // ===== Indexing (stylesheet scan) =====
  function buildIndex(){
    try {
      // Show loading state
      if (inspectMode && chipEl) {
        chipEl.innerHTML = '<strong>Building token index...</strong>';
        chipEl.style.display = 'block';
      }
      
      classToToken.clear();
      ruleIndex.length = 0;
      let order = 0;

      for (const sheet of Array.from(document.styleSheets)){
        let rules; 
        try { 
          rules = sheet.cssRules; 
        } catch (error) {
          console.debug('TokenPeek: Skipping cross-origin stylesheet:', error.message);
          continue; 
        }
        if(!rules) continue;

        for (const rule of Array.from(rules)){
          if (!(rule instanceof CSSStyleRule)) continue;
          const selectors = (rule.selectorText || "").split(",").map(s => s.trim());
          let token = null;

          // find var(--xxx) in relevant props
          for (const key of CSS_PROP_KEYS){
            const v = rule.style.getPropertyValue(key);
            const m = v && v.match(/var\((--[a-z0-9-]+)\)/i);
            if (m){ token = m[1]; break; }
          }
          if (!token || !isValidToken(token)) continue; // use enhanced validation

          for (const sel of selectors){
            // Fast path: class-to-token
            const m = sel.match(CLASS_PATTERN);
            if (m) classToToken.set(sel.replace(/^\./,''), token);

            // Full selector index to catch non-class targets like ".article p"
            ruleIndex.push({ sel, token, order: order++ });
          }
        }
      }
      
      // Hide loading state
      if (inspectMode && chipEl && !pinned) {
        hideChip();
      }
      
    } catch (error) {
      console.warn('TokenPeek: Error building index:', error);
      // Hide loading state on error
      if (inspectMode && chipEl && !pinned) {
        hideChip();
      }
    }
  }

  // ===== Resolution =====
  function isValidToken(token) {
    return TOKEN_PATTERNS.some(pattern => pattern.test(token));
  }
  
  function valueSummaryFor(el){
    const cs = getComputedStyle(el);
    return `size ${cs.fontSize.trim()}, weight ${cs.fontWeight.trim()}, lh ${cs.lineHeight.trim()}, ${cs.fontFamily.trim()}`;
  }
  function nearestDsElement(target){
    const path = (target && target.composedPath && target.composedPath()) || [target];
    for (const node of path){
      if (!(node instanceof Element)) continue;
      const ds = [...(node.classList || [])].find(c => c.startsWith(CLASS_PREFIX));
      if (ds) return { el: node, dsClass: ds };
    }
    return null;
  }
  function findBySelectors(el){
    // choose the last matching rule (CSS cascade-ish)
    let best = null;
    for (const r of ruleIndex){
      try { if (el.matches(r.sel)) best = r; } catch { /* invalid selector in this context */ }
    }
    return best; // { sel, token, order } | null
  }

  // ===== Handlers =====
  let hoverRAF = null;
  let hoverTimeout = null;

  function onHover(e){
    if (!inspectMode || pinned) return;
    
    // Clear existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    
    // Debounce hover events for better performance
    hoverTimeout = setTimeout(() => {
      if (hoverRAF) return;
      hoverRAF = requestAnimationFrame(() => {
        hoverRAF = null;
        const hit = nearestDsElement(e.target);
        outline(hit && hit.el);

        if (hit){
          const { el, dsClass } = hit;
          const token = classToToken.get(dsClass);
          if (token && isValidToken(token)){
            showChipAt(e.clientX, e.clientY,
              `<strong>${esc(token)}</strong><br><span class="sti-subtle">${esc(valueSummaryFor(el))}</span>`,
              false
            );
          } else {
            // Try selector-based rules for this element too
            const pick = findBySelectors(el);
            if (pick && pick.token && isValidToken(pick.token)){
              showChipAt(e.clientX, e.clientY,
                `<strong>${esc(pick.token)}</strong><br><span class="sti-subtle">${esc(valueSummaryFor(el))}</span>`,
                false
              );
            } else {
              hideChip();
            }
          }
        } else {
          hideChip();
        }
      });
    }, 16); // ~60fps debouncing
  }

  function onPick(e){
    if (!inspectMode) return;
    e.preventDefault(); e.stopPropagation();

    if (pinned){
      // Unpin on next click anywhere
      pinned = false; hideChip(); outline(null);
      return;
    }

    // Prefer ds-* classes
    const hit = nearestDsElement(e.target);
    if (hit){
      const { el, dsClass } = hit;
      const token = classToToken.get(dsClass);
      if (token && isValidToken(token)){
        pinned = true; outline(null);
        showChipAt(e.clientX, e.clientY,
          `<strong>${esc(token)}</strong><br><span class="sti-subtle">${esc(valueSummaryFor(el))}</span>`,
          true
        );
        return;
      }
    }

    // Fallback: selector rules (works for paragraphs like ".article p")
    let el = e.target instanceof Element ? e.target : null;
    let depth = 0, pick = null, pickedEl = null;
    while (el && depth < 8 && !pick){
      const r = findBySelectors(el);
      if (r && r.token && isValidToken(r.token)) { pick = r; pickedEl = el; break; }
      el = el.parentElement; depth++;
    }
    if (pick){
      pinned = true; outline(null);
      showChipAt(e.clientX, e.clientY,
        `<strong>${esc(pick.token)}</strong><br><span class="sti-subtle">${esc(valueSummaryFor(pickedEl))}</span>`,
        true
      );
      return;
    }

    hideChip();
  }

  function onKeyExit(e){
    if (e.key === "Escape"){
      if (pinned){ pinned = false; hideChip(); outline(null); }
      else disableInspect();
    }
    
    // Arrow key navigation for pinned chips
    if (pinned && chipEl) {
      const step = 10;
      switch(e.key) {
        case 'ArrowUp': 
          chipEl.style.top = (parseInt(chipEl.style.top) - step) + 'px'; 
          break;
        case 'ArrowDown': 
          chipEl.style.top = (parseInt(chipEl.style.top) + step) + 'px'; 
          break;
        case 'ArrowLeft': 
          chipEl.style.left = (parseInt(chipEl.style.left) - step) + 'px'; 
          break;
        case 'ArrowRight': 
          chipEl.style.left = (parseInt(chipEl.style.left) + step) + 'px'; 
          break;
      }
    }
  }

  // ===== Mode toggles =====
  function enableInspect(){
    inspectMode = true; pinned = false;
    document.documentElement.setAttribute(ENABLE_ATTR,"true");
    document.addEventListener("mousemove", onHover, { passive:true });
    document.addEventListener("click", onPick, true);
    document.addEventListener("keydown", onKeyExit, true);
  }
  function disableInspect(){
    inspectMode = false; pinned = false;
    
    // Clean up timeouts
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
    if (rebuildTimeout) {
      clearTimeout(rebuildTimeout);
      rebuildTimeout = null;
    }
    
    document.documentElement.removeAttribute(ENABLE_ATTR);
    document.removeEventListener("mousemove", onHover, { passive:true });
    document.removeEventListener("click", onPick, true);
    document.removeEventListener("keydown", onKeyExit, true);
    outline(null); hideChip();
  }

  // Page hotkey: Cmd+I (Mac) / Ctrl+I (Win/Linux)
  window.addEventListener("keydown", (e) => {
    const isToggle = (e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === HOTKEY;
    if (isToggle){ inspectMode ? disableInspect() : enableInspect(); e.preventDefault(); e.stopPropagation(); }
  });

  // Popup messaging (set/get)
  chrome.runtime?.onMessage?.addListener((msg, _sender, sendResponse) => {
    if (msg?.type === "sti:setInspect"){
      (msg.enabled ? enableInspect : disableInspect)();
      sendResponse?.({ ok: true, enabled: inspectMode });
      return true;
    }
    if (msg?.type === "sti:getInspect"){
      sendResponse?.({ ok: true, enabled: inspectMode });
      return true;
    }
    if (msg?.type === "sti:getStats"){
      sendResponse?.({ 
        ok: true, 
        stats: {
          totalTokens: classToToken.size,
          totalRules: ruleIndex.length,
          inspectMode,
          pinned
        }
      });
      return true;
    }
  });

  // Init
  buildIndex();

  // Re-index on stylesheet changes (SPA route swaps etc.)
  let rebuildTimeout = null;

  function debouncedBuildIndex() {
    if (rebuildTimeout) clearTimeout(rebuildTimeout);
    rebuildTimeout = setTimeout(buildIndex, 100);
  }

  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === "childList") {
        for (const n of m.addedNodes) {
          if (n.nodeName === "STYLE" || (n.nodeName === "LINK" && /stylesheet/i.test(n.rel || ""))) {
            debouncedBuildIndex();
          }
        }
      }
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
