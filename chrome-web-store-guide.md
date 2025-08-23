# Chrome Web Store Publishing Guide

## Prerequisites

1. **Google Account**: You need a Google account
2. **Developer Registration**: Pay the one-time $5 USD registration fee
3. **Extension Files**: Use the `releases/tokenpeek-extension-v1.2.0-chrome-store.zip` file

## Step 1: Register as a Developer

1. **Go to**: [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. **Sign in** with your Google account
3. **Pay the $5 registration fee** (one-time payment)
4. **Complete your developer profile**

## Step 2: Create New Extension

1. **Click "Add new item"**
2. **Upload your ZIP file**: `releases/tokenpeek-extension-v1.2.0-chrome-store.zip`
3. **Click "Upload"**

## Step 3: Fill Out Store Listing

### Basic Information
- **Extension name**: `TokenPeek - Semantic Typography Inspector`
- **Short description**: `Inspect semantic design tokens and typography on any webpage`
- **Detailed description**: Copy from README.md Features section

### Graphics
- **Icon**: Create a 128x128 PNG icon (recommend orange background with "TP" text)
- **Screenshots**: Take screenshots of the extension in action
  - Screenshot 1: Extension popup showing statistics
  - Screenshot 2: Token inspection in action
  - Screenshot 3: Copy functionality demonstration

### Privacy Practices
- **Data usage**: "This extension does not collect, store, or transmit any personal data"
- **Permissions**: Explain why you need `activeTab` and `scripting`
- **Privacy policy**: Create a simple privacy policy or use a template

## Step 4: Content and Policies

### Content Rating
- **Age rating**: General audience
- **Content categories**: Developer Tools, Productivity

### Store Settings
- **Language**: English
- **Country**: Your country
- **Category**: Developer Tools

## Step 5: Submit for Review

1. **Review all information** carefully
2. **Click "Submit for review"**
3. **Wait for Google's review** (typically 1-3 business days)

## Step 6: After Approval

1. **Extension goes live** on Chrome Web Store
2. **Share the store link** with your team
3. **Monitor reviews and feedback**
4. **Plan future updates**

## Important Notes

### Permissions Justification
- **activeTab**: Required to access the current tab's content
- **scripting**: Required to inject the content script for token inspection

### Privacy Policy Template
```
Privacy Policy for TokenPeek Extension

This extension:
- Does not collect personal information
- Does not store data on external servers
- Does not track user behavior
- Only accesses the current webpage to inspect design tokens
- All processing happens locally in the browser

For questions, contact: [Your Email]
```

### Common Rejection Reasons
- **Vague descriptions**: Be specific about what the extension does
- **Missing screenshots**: Include clear, relevant screenshots
- **Permission overreach**: Only request necessary permissions
- **Poor privacy policy**: Be clear about data handling

## Alternative: Unlisted Extension

If you want to avoid the review process:
1. **Set visibility to "Unlisted"**
2. **Only people with the link can install**
3. **No review required**
4. **Perfect for team distribution**

## Team Distribution Options

### Option 1: Chrome Web Store (Recommended)
- ✅ **Automatic updates**
- ✅ **Easy installation**
- ✅ **Professional appearance**
- ❌ **Requires Google review**
- ❌ **$5 registration fee**

### Option 2: Direct Distribution
- ✅ **No review required**
- ✅ **Instant distribution**
- ✅ **No fees**
- ❌ **Manual updates**
- ❌ **Less professional**

### Option 3: GitHub Releases
- ✅ **Version control**
- ✅ **Easy for developers**
- ❌ **Manual installation**
- ❌ **No automatic updates**

## Next Steps After Publishing

1. ✅ **Extension published to Chrome Web Store**
2. 🔄 **Share store link with team**
3. 🔄 **Monitor user feedback**
4. 🔄 **Plan version 1.3.0 features**
5. 🔄 **Set up automated testing** (optional)

## Support and Maintenance

- **Monitor reviews** and respond to feedback
- **Update regularly** based on user needs
- **Maintain compatibility** with Chrome updates
- **Document changes** in CHANGELOG.md
