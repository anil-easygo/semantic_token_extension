# GitHub Repository Setup Guide

## Step 1: Create GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and sign in
2. **Click "New repository"** (green button)
3. **Repository settings**:
   - **Repository name**: `tokenpeek-extension`
   - **Description**: `A powerful Chrome extension for inspecting semantic design tokens and typography on any webpage`
   - **Visibility**: Choose Public or Private (recommend Public for open source)
   - **Initialize with**: ✅ Add a README file
   - **Add .gitignore**: Choose "Node" (we'll replace it)
   - **Choose a license**: MIT License

4. **Click "Create repository"**

## Step 2: Connect Your Local Repository

After creating the GitHub repository, you'll see setup instructions. Use these commands:

```bash
# Add the remote origin (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/tokenpeek-extension.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Create GitHub Release

1. **Go to your repository** on GitHub
2. **Click "Releases"** on the right side
3. **Click "Create a new release"**
4. **Tag version**: `v1.2.0`
5. **Release title**: `TokenPeek v1.2.0 - Initial Release`
6. **Description**: Copy from CHANGELOG.md
7. **Upload files**: Upload the `releases/tokenpeek-extension-v1.2.0-github.zip` file
8. **Click "Publish release"**

## Step 4: Update README Links

After creating the repository, update these links in README.md:
- Replace `[Repository Link]` with your actual GitHub repository URL
- Replace `[GitHub Issues Link]` with your repository issues URL
- Replace `[Your Email]` with your contact email

## Step 5: Enable GitHub Issues and Discussions

1. **Go to repository Settings**
2. **Features section**: Enable Issues and Discussions
3. **Set up issue templates** if desired

## Step 6: Share with Your Team

- **Public repository**: Share the GitHub URL directly
- **Private repository**: Add team members as collaborators
- **Releases**: Team can download the ZIP file from GitHub releases
- **Source code**: Team can clone and build locally

## Quick Commands

```bash
# After setting up the remote origin
git remote add origin https://github.com/YOUR_USERNAME/tokenpeek-extension.git
git branch -M main
git push -u origin main

# For future updates
git add .
git commit -m "Update message"
git push origin main
```

## Next Steps After GitHub Setup

1. ✅ **GitHub repository created and populated**
2. ✅ **GitHub release published**
3. 🔄 **Submit to Chrome Web Store** (see Chrome Web Store guide)
4. 🔄 **Share with your team**
5. 🔄 **Set up CI/CD** (optional, for future updates)
