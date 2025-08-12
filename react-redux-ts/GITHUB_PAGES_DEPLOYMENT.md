# GitHub Pages Deployment Guide

This guide will help you deploy your React Redux TypeScript application to GitHub Pages.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository
- Node.js and npm installed locally

## Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

## Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build",
    "start": "react-scripts start",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

## Step 3: Add Homepage URL

Add this line to your `package.json` (replace `yourusername` with your actual GitHub username):

```json
{
  "homepage": "https://yourusername.github.io/react-redux-ts",
  "name": "react-redux-ts",
  "version": "0.1.0",
  ...
}
```

## Step 4: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Step 5: Configure GitHub Repository

1. Go to your GitHub repository
2. Click on **Settings**
3. Scroll down to **GitHub Pages** section
4. Under **Source**, select **gh-pages** branch
5. Click **Save**

## Step 6: Wait for Deployment

- GitHub Pages will automatically build and deploy your site
- It may take a few minutes for changes to appear
- You can check the deployment status in the **Actions** tab

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add your domain to the **Custom domain** field in GitHub Pages settings
2. Create a `CNAME` file in your `public` folder with your domain
3. Update your DNS settings to point to GitHub Pages

## Troubleshooting

### Common Issues:

1. **404 Errors**: Make sure your `homepage` URL in `package.json` is correct
2. **Build Failures**: Check that all dependencies are installed and the build passes locally
3. **Routing Issues**: GitHub Pages doesn't support client-side routing by default. Consider using HashRouter instead of BrowserRouter

### Fix for Client-Side Routing:

If you experience routing issues, update your routing configuration to use HashRouter:

```tsx
import { HashRouter as Router } from 'react-router-dom';

// Instead of:
// import { BrowserRouter as Router } from 'react-router-dom';
```

## Performance Optimization

The `index.html` file includes:

- ✅ **Loading Spinner** for better perceived performance
- ✅ **Critical CSS** to prevent layout shifts
- ✅ **Meta Tags** for SEO and social sharing
- ✅ **Preconnect** links for external resources
- ✅ **Responsive Design** support

## SEO Features

- Meta description and keywords
- Open Graph tags for social media
- Twitter Card support
- Proper viewport settings
- Theme color for mobile browsers

## Security

- Content Security Policy headers (if needed)
- HTTPS enforcement (GitHub Pages provides this automatically)
- XSS protection through React's built-in security

## Monitoring

After deployment, monitor:

- Page load times
- User engagement metrics
- Error rates in browser console
- Mobile responsiveness

## Updating Your Site

To update your deployed site:

1. Make your changes locally
2. Commit and push to GitHub
3. Run `npm run deploy`
4. Wait for GitHub Pages to rebuild

## Support

If you encounter issues:

1. Check the GitHub Pages documentation
2. Review the deployment logs in the Actions tab
3. Ensure your build passes locally with `npm run build`
4. Verify your `homepage` URL is correct in `package.json`

---

**Note**: Remember to replace `yourusername` with your actual GitHub username in the `homepage` field and meta tags.
