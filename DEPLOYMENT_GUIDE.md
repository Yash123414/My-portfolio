# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio website to GitHub Pages, making it live and accessible to everyone.

## 📋 Prerequisites

Before starting, make sure you have:
- A GitHub account (create one at [github.com](https://github.com) if needed)
- Git installed on your computer
- Your portfolio files ready in the current directory

## 🔧 Step 1: Prepare Your Repository

### 1.1 Initialize Git Repository (if not already done)
```bash
git init
```

### 1.2 Add all files to Git
```bash
git add .
```

### 1.3 Create your first commit
```bash
git commit -m "Initial commit: Portfolio website ready for deployment"
```

## 🌐 Step 2: Create GitHub Repository

### 2.1 Create a new repository on GitHub
1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio-website` or `yash-portfolio`)
5. Make sure it's set to **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2.2 Connect your local repository to GitHub
Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

## 🚀 Step 3: Enable GitHub Pages

### 3.1 Access Repository Settings
1. Go to your repository on GitHub
2. Click on the "Settings" tab (located in the repository navigation bar)

### 3.2 Configure GitHub Pages
1. Scroll down to the "Pages" section in the left sidebar
2. Under "Source", select "Deploy from a branch"
3. Choose "main" branch
4. Select "/ (root)" as the folder
5. Click "Save"

### 3.3 Wait for Deployment
- GitHub will start building your site (this may take a few minutes)
- You'll see a green checkmark when it's ready
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

## ✅ Step 4: Verify Deployment

### 4.1 Check Your Live Website
1. Visit your GitHub Pages URL
2. Test all navigation links
3. Verify the resume download functionality
4. Check that all images and assets load correctly

### 4.2 Test on Different Devices
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

## 🔄 Step 5: Making Updates

### 5.1 Update Your Website
When you want to make changes to your website:

```bash
# Make your changes to the files
# Then commit and push:
git add .
git commit -m "Update: describe your changes here"
git push origin main
```

### 5.2 Automatic Deployment
- GitHub Pages automatically rebuilds your site when you push changes
- Updates typically take 1-5 minutes to appear live
- Check the "Actions" tab in your repository to see deployment status

## 🎯 Step 6: Custom Domain (Optional)

### 6.1 If you have a custom domain:
1. In repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Create a CNAME file in your repository root with your domain name
4. Configure your domain's DNS settings to point to GitHub Pages

## 🛠️ Troubleshooting

### Common Issues and Solutions:

**Issue**: 404 Error when visiting the site
- **Solution**: Make sure your repository is public and GitHub Pages is enabled

**Issue**: Images not loading
- **Solution**: Check that image paths are relative (e.g., `resources/image.jpg` not `/resources/image.jpg`)

**Issue**: Resume PDF not downloading
- **Solution**: Ensure the PDF file is committed to the repository and the path is correct

**Issue**: Site not updating after push
- **Solution**: Check the Actions tab for build errors, clear browser cache, wait a few minutes

### Getting Help:
- Check GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/pages)
- GitHub Community Forum: [github.community](https://github.community)

## 🎉 Success!

Your portfolio website is now live! Share your GitHub Pages URL with:
- Potential employers
- Clients
- Professional networks
- Social media

## 📈 Next Steps

Consider these enhancements:
- Set up Google Analytics for visitor tracking
- Add a custom domain for a more professional URL
- Implement SEO optimizations
- Add a blog section
- Set up automated testing

## 📝 Quick Reference Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit: Portfolio website ready for deployment"

# Connect to GitHub (replace with your details)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main

# Future updates
git add .
git commit -m "Update: describe changes"
git push origin main
```

## 🔗 Important URLs

- **Your Repository**: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME`
- **Your Live Website**: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
- **GitHub Pages Settings**: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME/settings/pages`

---

**Your live website URL**: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

Remember to replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub details!
