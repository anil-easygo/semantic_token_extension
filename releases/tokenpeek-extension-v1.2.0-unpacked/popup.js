(async function () {
  const toggle = document.getElementById("toggle");
  const tokenCount = document.getElementById("token-count");
  const ruleCount = document.getElementById("rule-count");

  async function getActiveTabId(){
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab?.id;
  }

  async function updateStats() {
    const tabId = await getActiveTabId();
    if (!tabId) return;
    
    chrome.tabs.sendMessage(tabId, { type: "sti:getStats" }, (res) => {
      if (chrome.runtime.lastError) return;
      if (res && res.ok) {
        tokenCount.textContent = res.stats.totalTokens || 0;
        ruleCount.textContent = res.stats.totalRules || 0;
      }
    });
  }

  // Initialize toggle with current state from the page
  (async () => {
    const tabId = await getActiveTabId();
    if (!tabId) return;
    chrome.tabs.sendMessage(tabId, { type: "sti:getInspect" }, (res) => {
      if (chrome.runtime.lastError) return; // content not available on this page yet
      if (res && res.ok) {
        toggle.checked = !!res.enabled;
        updateStats();
      }
    });
  })();

  // Toggle inspect mode on change
  toggle.addEventListener("change", async () => {
    const tabId = await getActiveTabId();
    if (!tabId) return;
    chrome.tabs.sendMessage(tabId, { type: "sti:setInspect", enabled: toggle.checked }, (res) => {
      // Update stats after toggle
      setTimeout(updateStats, 100);
    });
  });
})();
