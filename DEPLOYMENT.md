# Deployment Guide

## 🚀 Deploy to GitHub

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub** and push:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Deploy to Netlify

### Option 1: Drag and Drop (Quick Deploy)
1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the **`dist`** folder to the drop zone
4. Your site will be live instantly!

### Option 2: Connect to GitHub (Recommended)
1. Push your code to GitHub (see above)
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build settings are configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## 📁 Project Structure

- **`dist/`** - Production build (ready for deployment)
- **`src/`** - Source code
- **`public/`** - Static assets
- **`netlify.toml`** - Netlify configuration

## ✅ Ready for Deployment

Your project is now ready! The `dist` folder contains:
- ✅ Optimized production build
- ✅ All assets and files
- ✅ Routing configuration for React Router
- ✅ Ready for GitHub and Netlify

## 🔄 Rebuild

Run `npm run build` anytime you make changes to regenerate the `dist` folder.
