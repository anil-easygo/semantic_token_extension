#!/bin/bash

# TokenPeek Privacy Policy Setup Script
# This script helps you set up GitHub Pages for your privacy policy

echo "🔒 TokenPeek Privacy Policy Setup"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "privacy-policy.html" ]; then
    echo "❌ Error: privacy-policy.html not found in current directory"
    echo "Please run this script from the semantic_token_extension directory"
    exit 1
fi

echo "✅ Found privacy-policy.html"
echo ""

echo "Choose your hosting option:"
echo "1. Create new repository for privacy policy (Recommended)"
echo "2. Use existing repository with GitHub Pages"
echo "3. Manual setup instructions"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Setting up new repository for privacy policy..."
        echo ""
        read -p "Enter your GitHub username: " username
        read -p "Enter repository name (e.g., tokenpeek-privacy): " repo_name
        
        echo ""
        echo "📋 Commands to run:"
        echo "==================="
        echo ""
        echo "# 1. Create new repository on GitHub:"
        echo "#    - Go to https://github.com/new"
        echo "#    - Repository name: $repo_name"
        echo "#    - Make it PUBLIC"
        echo "#    - Don't initialize with README"
        echo ""
        echo "# 2. Clone and setup:"
        echo "git clone https://github.com/$username/$repo_name.git"
        echo "cd $repo_name"
        echo "cp ../semantic_token_extension/privacy-policy.html index.html"
        echo "git add index.html"
        echo "git commit -m \"Add privacy policy\""
        echo "git push origin main"
        echo ""
        echo "# 3. Enable GitHub Pages:"
        echo "#    - Go to Settings > Pages"
        echo "#    - Source: Deploy from a branch"
        echo "#    - Branch: main, Folder: /(root)"
        echo ""
        echo "# 4. Your privacy policy will be at:"
        echo "https://$username.github.io/$repo_name/"
        echo ""
        ;;
    2)
        echo ""
        echo "📚 Using existing repository..."
        echo ""
        echo "1. Copy privacy-policy.html to your repository root:"
        echo "   cp privacy-policy.html index.html"
        echo ""
        echo "2. Commit and push:"
        echo "   git add index.html"
        echo "   git commit -m \"Add privacy policy for Chrome Web Store\""
        echo "   git push origin main"
        echo ""
        echo "3. Enable GitHub Pages in repository Settings > Pages"
        echo ""
        ;;
    3)
        echo ""
        echo "📖 Manual Setup Instructions:"
        echo "============================"
        echo ""
        echo "1. Host privacy-policy.html on any web service:"
        echo "   - GitHub Pages"
        echo "   - Netlify"
        echo "   - Vercel"
        echo "   - Firebase Hosting"
        echo "   - Any web hosting service"
        echo ""
        echo "2. Ensure the URL is publicly accessible"
        echo ""
        echo "3. Update your extension with the privacy policy URL"
        echo ""
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🔗 After setup, update your extension:"
echo "1. Update manifest.json with homepage_url"
echo "2. Update README.md with privacy policy link"
echo "3. Re-submit to Chrome Web Store"
echo ""
echo "📚 See GITHUB_PAGES_SETUP.md for detailed instructions"
echo ""
echo "✅ Setup complete! Good luck with your Chrome Web Store submission!"
