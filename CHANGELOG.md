# Changelog

All notable changes to the TokenPeek extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-12-19

### Added
- **Performance Improvements**
  - Hover event debouncing for smoother performance
  - Debounced stylesheet re-indexing to prevent excessive processing
  - Proper timeout cleanup to prevent memory leaks

- **Enhanced Token Detection**
  - Support for multiple design system patterns (--ds-, --color-, --spacing-, etc.)
  - Improved validation with pattern-based token recognition
  - Better error handling for cross-origin stylesheets

- **User Experience Enhancements**
  - One-click copy button for token names with visual feedback
  - Smooth fade-in animations for token chips
  - Pulsing outline effects for better visual feedback
  - Loading states during token indexing

- **Accessibility Improvements**
  - ARIA attributes for screen reader support
  - Arrow key navigation for pinned chips
  - Enhanced keyboard shortcuts and navigation

- **Developer Experience**
  - Real-time statistics display in popup
  - Enhanced console debugging with comprehensive stats
  - Better error messages and debugging information

### Changed
- Updated extension name to "TokenPeek - Semantic Typography Inspector"
- Enhanced manifest description with feature highlights
- Improved error handling throughout the application

### Fixed
- Memory leaks from uncleaned timeouts
- Performance issues with rapid hover events
- Cross-origin stylesheet handling errors

## [1.1.0] - 2024-12-19

### Added
- Basic semantic token inspection functionality
- Hover and click detection for UI elements
- Support for --ds- prefixed tokens
- Keyboard shortcuts (Cmd+I / Ctrl+I)
- Basic popup interface

### Changed
- Initial release with core functionality

## [1.0.0] - 2024-12-19

### Added
- Initial extension structure
- Basic manifest configuration
- Content script setup
