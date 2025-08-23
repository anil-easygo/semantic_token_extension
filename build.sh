#!/bin/bash

# TokenPeek Extension Build Script
# This script packages the extension for Chrome Web Store and GitHub releases

set -e

echo "🚀 Building TokenPeek Extension..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
EXTENSION_NAME="tokenpeek-extension"
VERSION=$(grep '"version"' semantic_tokens_check/manifest.json | sed 's/.*"version": "\(.*\)",/\1/')
BUILD_DIR="build"
RELEASE_DIR="releases"

echo -e "${BLUE}Version: ${VERSION}${NC}"

# Create build directories
mkdir -p "$BUILD_DIR"
mkdir -p "$RELEASE_DIR"

# Clean previous builds
echo -e "${YELLOW}Cleaning previous builds...${NC}"
rm -rf "$BUILD_DIR"/*
rm -rf "$RELEASE_DIR"/*

# Copy extension files to build directory
echo -e "${YELLOW}Copying extension files...${NC}"
cp -r semantic_tokens_check "$BUILD_DIR/"

# Create Chrome Web Store package
echo -e "${YELLOW}Creating Chrome Web Store package...${NC}"
cd "$BUILD_DIR"
zip -r "../$RELEASE_DIR/${EXTENSION_NAME}-v${VERSION}-chrome-store.zip" semantic_tokens_check/ -x "*.git*" "*.DS_Store*"
cd ..

# Create GitHub release package
echo -e "${YELLOW}Creating GitHub release package...${NC}"
cd "$BUILD_DIR"
zip -r "../$RELEASE_DIR/${EXTENSION_NAME}-v${VERSION}-github.zip" . -x "*.git*" "*.DS_Store*"
cd ..

# Create unpacked directory for manual installation
echo -e "${YELLOW}Creating unpacked directory...${NC}"
cp -r "$BUILD_DIR/semantic_tokens_check" "$RELEASE_DIR/${EXTENSION_NAME}-v${VERSION}-unpacked/"

# Create Chrome extension package (.crx)
echo -e "${YELLOW}Creating Chrome extension package...${NC}"
echo -e "${YELLOW}Note: You need to manually pack the extension in Chrome:${NC}"
echo -e "${BLUE}1. Go to chrome://extensions/${NC}"
echo -e "${BLUE}2. Enable Developer mode${NC}"
echo -e "${BLUE}3. Click 'Pack extension'${NC}"
echo -e "${BLUE}4. Select the semantic_tokens_check folder${NC}"
echo -e "${BLUE}5. Save the .crx and .pem files to the releases directory${NC}"

# Create installation instructions
echo -e "${YELLOW}Creating installation instructions...${NC}"
cat > "$RELEASE_DIR/INSTALLATION.md" << EOF
# TokenPeek Extension Installation

## Version ${VERSION}

### Option 1: Chrome Web Store (Recommended)
1. Visit the Chrome Web Store (link will be added after review)
2. Click "Add to Chrome"
3. Confirm installation

### Option 2: Manual Installation
1. Extract the \`${EXTENSION_NAME}-v${VERSION}-unpacked\` folder
2. Open Chrome and go to \`chrome://extensions/\`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extracted folder
5. The extension is now installed!

### Option 3: Chrome Extension Package (.crx)
1. Download the \`.crx\` file (if available)
2. Drag and drop it to \`chrome://extensions/\`
3. Click "Add extension" when prompted

## Usage
- Use \`Cmd+I\` (Mac) or \`Ctrl+I\` (Windows/Linux) to toggle inspect mode
- Hover over elements to see token information
- Click to pin tokens and use the copy button
- Use arrow keys to move pinned chips

## Support
- GitHub: [Repository Link]
- Issues: [GitHub Issues Link]
EOF

# Create release summary
echo -e "${YELLOW}Creating release summary...${NC}"
cat > "$RELEASE_DIR/RELEASE_SUMMARY.md" << EOF
# TokenPeek Extension v${VERSION} Release

## What's New
- Performance improvements with hover debouncing
- Enhanced token detection for multiple design systems
- One-click copy functionality for token names
- Improved accessibility with ARIA support
- Real-time statistics display
- Better error handling and debugging

## Files Included
- \`${EXTENSION_NAME}-v${VERSION}-chrome-store.zip\` - For Chrome Web Store submission
- \`${EXTENSION_NAME}-v${VERSION}-github.zip\` - For GitHub releases
- \`${EXTENSION_NAME}-v${VERSION}-unpacked/\` - For manual installation
- \`INSTALLATION.md\` - Installation instructions
- \`RELEASE_SUMMARY.md\` - This file

## Next Steps
1. **Chrome Web Store**: Upload the chrome-store.zip file
2. **GitHub**: Create a release with the github.zip file
3. **Team Distribution**: Share the unpacked folder or .crx file

## Build Information
- Build Date: $(date)
- Version: ${VERSION}
- Manifest Version: 3
EOF

echo -e "${GREEN}✅ Build completed successfully!${NC}"
echo -e "${BLUE}📁 Build files created in: $RELEASE_DIR${NC}"
echo -e "${BLUE}📦 Chrome Web Store package: $RELEASE_DIR/${EXTENSION_NAME}-v${VERSION}-chrome-store.zip${NC}"
echo -e "${BLUE}📦 GitHub release package: $RELEASE_DIR/${EXTENSION_NAME}-v${VERSION}-github.zip${NC}"
echo -e "${BLUE}📁 Unpacked directory: $RELEASE_DIR/${EXTENSION_NAME}-v${VERSION}-unpacked/${NC}"

echo -e "\n${YELLOW}🚀 Ready for publishing!${NC}"
echo -e "${BLUE}Next steps:${NC}"
echo -e "1. Review the build files in the releases directory"
echo -e "2. Commit and push to GitHub"
echo -e "3. Create a GitHub release"
echo -e "4. Submit to Chrome Web Store"
