# TokenPeek - Semantic Typography Inspector

A powerful Chrome extension that allows designers and developers to inspect semantic design tokens and typography on any webpage. Click any UI element to reveal the applied semantic typography tokens (e.g., `--ds-display-md`).

## ✨ Features

- **🔍 Smart Token Detection**: Automatically detects design tokens from various design systems
- **📋 One-Click Copy**: Copy token names to clipboard with a single click
- **⌨️ Keyboard Shortcuts**: Toggle inspect mode with `Cmd+I` (Mac) or `Ctrl+I` (Windows/Linux)
- **🎯 Element Highlighting**: Visual feedback with orange outlines and tooltips
- **📊 Real-time Statistics**: See how many tokens and rules are found on the page
- **♿ Accessibility**: Full keyboard navigation and screen reader support
- **🚀 Performance Optimized**: Debounced hover events and efficient indexing

## 🎯 Supported Token Patterns

- `--ds-*` - Design System tokens
- `--color-*` - Color tokens  
- `--spacing-*` - Spacing tokens
- `--typography-*` - Typography tokens
- `--radius-*` - Border radius tokens
- `--shadow-*` - Shadow tokens
- `--border-*` - Border tokens

## 🚀 Installation

### Option 1: Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store](link-to-be-added)
2. Click "Add to Chrome"
3. Confirm installation

### Option 2: Manual Installation
1. Download the latest release from [GitHub Releases](link-to-be-added)
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top right)
5. Click "Load unpacked" and select the extracted folder
6. The extension is now installed!

## 🎮 Usage

### Basic Inspection
1. **Enable inspect mode**: Click the TokenPeek extension icon or use `Cmd+I` (Mac) / `Ctrl+I` (Windows/Linux)
2. **Hover over elements**: See token information in real-time
3. **Click to pin**: Click any element to pin the token information
4. **Copy tokens**: Use the copy button (📋) to copy token names to clipboard

### Keyboard Navigation
- **Arrow Keys**: Move pinned chips around the screen
- **Escape**: Unpin chips or disable inspect mode
- **Cmd+I / Ctrl+I**: Toggle inspect mode

### Advanced Features
- **Statistics**: View token counts in the extension popup
- **Cross-origin Support**: Works on most websites
- **SPA Support**: Automatically re-indexes on route changes

## 🛠️ Development

### Project Structure
```
semantic_tokens_check/
├── manifest.json      # Extension configuration
├── content.js         # Main functionality
├── popup.html         # Extension popup UI
├── popup.js           # Popup functionality
└── overlay.css        # Styling for tooltips and overlays
```

### Building
```bash
# Clone the repository
git clone https://github.com/yourusername/tokenpeek-extension.git

# Navigate to the project
cd tokenpeek-extension

# Load in Chrome
# 1. Go to chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select the semantic_tokens_check folder
```

### Debugging
Open the browser console and type:
```javascript
__stiTokenIndex
```
This will show you detailed information about detected tokens and the current state.

## 📱 Browser Support

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Other Chromium-based browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for designers and developers who work with design systems
- Inspired by the need for better token inspection tools
- Special thanks to the Chrome Extensions API team

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](link-to-be-added)
- 💡 **Feature Requests**: [GitHub Discussions](link-to-be-added)
- 📧 **Contact**: [Your Email]

---

**Made with ❤️ for the design system community**
