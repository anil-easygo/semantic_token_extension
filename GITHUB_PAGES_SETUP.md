# Setting Up GitHub Pages for Privacy Policy

To fix the Chrome Web Store rejection, you need to host your privacy policy publicly. Here's how to set it up using GitHub Pages:

## Option 1: GitHub Pages (Recommended)

### 1. Create a New Repository
Create a new public repository specifically for hosting your privacy policy:
- Go to GitHub and create a new repository (e.g., `tokenpeek-privacy`)
- Make it **public**
- Don't initialize with README, .gitignore, or license

### 2. Upload Privacy Policy
```bash
# Clone the new repository
git clone https://github.com/yourusername/tokenpeek-privacy.git
cd tokenpeek-privacy

# Copy the privacy policy HTML file
cp ../semantic_token_extension/privacy-policy.html index.html

# Commit and push
git add index.html
git commit -m "Add privacy policy"
git push origin main
```

### 3. Enable GitHub Pages
- Go to your repository on GitHub
- Click **Settings** tab
- Scroll down to **Pages** section
- Under **Source**, select **Deploy from a branch**
- Select **main** branch and **/(root)** folder
- Click **Save**

### 4. Get Your Privacy Policy URL
Your privacy policy will be available at:
```
https://yourusername.github.io/tokenpeek-privacy/
```

## Option 2: Use Your Main Repository

If you prefer to keep everything in your main `semantic_token_extension` repository:

### 1. Enable GitHub Pages
- Go to your `semantic_token_extension` repository
- Click **Settings** tab
- Scroll down to **Pages** section
- Under **Source**, select **Deploy from a branch**
- Select **main** branch and **/(root)** folder
- Click **Save**

### 2. Move Privacy Policy to Root
```bash
# In your semantic_token_extension directory
cp privacy-policy.html index.html
git add index.html
git commit -m "Add privacy policy for Chrome Web Store"
git push origin main
```

Your privacy policy will be available at:
```
https://yourusername.github.io/semantic_token_extension/
```

## Option 3: Alternative Hosting Services

If you prefer not to use GitHub Pages, you can use:

- **Netlify**: Drag and drop the HTML file
- **Vercel**: Upload the HTML file
- **Surge.sh**: Simple static hosting
- **Firebase Hosting**: Google's hosting service

## Update Your Extension

Once you have a public URL for your privacy policy:

1. **Update manifest.json** with the correct homepage URL
2. **Update README.md** with the privacy policy link
3. **Re-submit to Chrome Web Store** with the privacy policy URL

## Testing

Before submitting to Chrome Web Store:
1. Visit your privacy policy URL in a browser
2. Ensure it loads correctly
3. Test on mobile devices
4. Verify all links work

## Chrome Web Store Submission

When re-submitting your extension:
1. Include the privacy policy URL in the description
2. Make sure the URL is publicly accessible
3. The URL should work without authentication
4. The page should clearly state it's your privacy policy

---

**Note**: The privacy policy URL must be publicly accessible and working before you can successfully submit your extension to the Chrome Web Store.
