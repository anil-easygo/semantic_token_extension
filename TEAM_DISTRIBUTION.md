# Team Distribution Guide

## Quick Team Installation

### Option 1: Unpacked Folder (Recommended for Development)

1. **Download**: `releases/tokenpeek-extension-v1.2.0-unpacked/` folder
2. **Extract** the folder to a permanent location on your computer
3. **Open Chrome** and go to `chrome://extensions/`
4. **Enable "Developer mode"** (toggle in top right)
5. **Click "Load unpacked"** and select the extracted folder
6. **Extension is now installed!**

### Option 2: Chrome Extension Package (.crx)

1. **Download** the `.crx` file (if available)
2. **Drag and drop** the `.crx` file to `chrome://extensions/`
3. **Click "Add extension"** when prompted

## Usage Instructions for Team

### Basic Operation
- **Toggle inspect mode**: Click the TokenPeek extension icon or use `Cmd+I` (Mac) / `Ctrl+I` (Windows/Linux)
- **Hover over elements**: See token information in real-time
- **Click to pin**: Click any element to pin the token information
- **Copy tokens**: Use the copy button (📋) to copy token names to clipboard

### Keyboard Shortcuts
- **Arrow Keys**: Move pinned chips around the screen
- **Escape**: Unpin chips or disable inspect mode
- **Cmd+I / Ctrl+I**: Toggle inspect mode

### Features
- **Real-time statistics**: View token counts in the extension popup
- **Multiple design systems**: Supports --ds-, --color-, --spacing-, etc.
- **Performance optimized**: Smooth hover detection and efficient processing

## Troubleshooting

### Extension Not Working
1. **Check permissions**: Make sure the extension has access to the current tab
2. **Refresh page**: Sometimes needed after installation
3. **Check console**: Open DevTools and look for any error messages

### No Tokens Detected
1. **Verify inspect mode**: Make sure the extension is enabled (orange icon)
2. **Check page content**: The page must have CSS with design tokens
3. **Cross-origin**: Some sites may have restrictions

### Performance Issues
1. **Close other extensions**: Reduce browser resource usage
2. **Refresh page**: Clear any cached data
3. **Check page complexity**: Very complex pages may be slower

## Team Updates

### When New Versions Are Available
1. **Download** the new version from the releases folder
2. **Remove old version**: In `chrome://extensions/`, click "Remove"
3. **Install new version**: Follow the installation steps above

### Automatic Updates (Future)
- When published to Chrome Web Store, updates will be automatic
- For now, manual updates are required

## Support

### For Technical Issues
- Check the browser console for error messages
- Verify the extension is properly loaded
- Test on a simple page first

### For Feature Requests
- Use the GitHub repository issues (if public)
- Contact the development team directly
- Check the CHANGELOG.md for planned features

## Best Practices

### For Designers
- Use the extension to verify design token implementation
- Copy token names for design system documentation
- Share findings with the development team

### For Developers
- Use the extension to debug CSS token issues
- Verify token naming conventions
- Test token detection on different page types

### For QA Teams
- Test the extension on various websites
- Report any bugs or performance issues
- Verify accessibility features work correctly

## Quick Reference

| Action | Shortcut | Description |
|--------|----------|-------------|
| Toggle Inspect | `Cmd+I` / `Ctrl+I` | Enable/disable token inspection |
| Pin Token | `Click` | Pin token information to screen |
| Copy Token | `Click copy button` | Copy token name to clipboard |
| Move Pinned | `Arrow Keys` | Move pinned chips around |
| Unpin | `Escape` | Remove pinned chips |
| Exit Mode | `Escape` | Disable inspect mode |

---

**Happy token inspecting! 🎨✨**
