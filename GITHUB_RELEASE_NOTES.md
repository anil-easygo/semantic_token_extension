# GitHub Release Notes for v1.2.0

## Release Title
TokenPeek v1.2.0 - Initial Release

## Tag Version
v1.2.0

## Description

🎉 **TokenPeek v1.2.0** - A powerful Chrome extension for inspecting semantic design tokens and typography on any webpage!

## ✨ What's New in v1.2.0

### 🚀 Performance Improvements
- **Hover event debouncing** for smoother performance
- **Debounced stylesheet re-indexing** to prevent excessive processing
- **Proper timeout cleanup** to prevent memory leaks

### 🔍 Enhanced Token Detection
- **Support for multiple design systems**: `--ds-`, `--color-`, `--spacing-`, `--typography-`, `--radius-`, `--shadow-`, `--border-`
- **Improved validation** with pattern-based token recognition
- **Better error handling** for cross-origin stylesheets

### 🎨 User Experience Enhancements
- **One-click copy button** for token names with visual feedback
- **Smooth fade-in animations** for token chips
- **Pulsing outline effects** for better visual feedback
- **Loading states** during token indexing

### ♿ Accessibility Improvements
- **ARIA attributes** for screen reader support
- **Arrow key navigation** for pinned chips
- **Enhanced keyboard shortcuts** and navigation

### 🛠️ Developer Experience
- **Real-time statistics display** in popup
- **Enhanced console debugging** with comprehensive stats
- **Better error messages** and debugging information

## 🎯 Key Features

- **Smart Token Detection**: Automatically detects design tokens from various design systems
- **One-Click Copy**: Copy token names to clipboard with a single click
- **Keyboard Shortcuts**: Toggle inspect mode with `Cmd+I` (Mac) or `Ctrl+I` (Windows/Linux)
- **Element Highlighting**: Visual feedback with orange outlines and tooltips
- **Real-time Statistics**: See how many tokens and rules are found on the page
- **Cross-origin Support**: Works on most websites
- **SPA Support**: Automatically re-indexes on route changes

## 📱 Browser Support

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Other Chromium-based browsers

## 🚀 Installation

### Option 1: Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store (link will be added after review)
2. Click "Add to Chrome"
3. Confirm installation

### Option 2: Manual Installation
1. Download this ZIP file
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top right)
5. Click "Load unpacked" and select the extracted folder
6. The extension is now installed!

## 🎮 Usage

- **Toggle inspect mode**: Click the TokenPeek extension icon or use `Cmd+I` (Mac) / `Ctrl+I` (Windows/Linux)
- **Hover over elements**: See token information in real-time
- **Click to pin**: Click any element to pin the token information
- **Copy tokens**: Use the copy button (📋) to copy token names to clipboard
- **Keyboard navigation**: Use arrow keys to move pinned chips around

## 🔧 For Developers

Open the browser console and type:
```javascript
__stiTokenIndex
```
This will show you detailed information about detected tokens and the current state.

## 📋 Files Included

- **Chrome Web Store package** - For store submission
- **GitHub release package** - For manual installation
- **Unpacked directory** - For development and immediate use
- **Installation instructions** - Complete setup guide

## 🐛 Bug Reports & Feature Requests

- **GitHub Issues**: [Create an issue](https://github.com/anil-easygo/semantic_token_extension/issues)
- **GitHub Discussions**: [Start a discussion](https://github.com/anil-easygo/semantic_token_extension/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for designers and developers who work with design systems
- Inspired by the need for better token inspection tools
- Special thanks to the Chrome Extensions API team

---

**Made with ❤️ for the design system community**

## 📊 Release Statistics

- **Total Files**: 6
- **Extension Size**: ~7.6 KB
- **Supported Token Patterns**: 7+
- **Browser Compatibility**: Chrome 88+, Edge 88+
- **License**: MIT (Open Source)
