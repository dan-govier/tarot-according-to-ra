# GitHub Setup Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ra-tarot-app` (or whatever you prefer)
3. Description: "A Memphis-styled study tool for Ra's archetypal tarot framework"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Configure Git with Your Info

In your terminal (in the tarot-app directory):

```bash
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

Or set globally:
```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

## Step 3: Connect to GitHub

Copy the commands GitHub shows you under "push an existing repository from the command line":

```bash
cd /path/to/tarot-app
git remote add origin https://github.com/YOUR-USERNAME/ra-tarot-app.git
git branch -M main
git push -u origin main
```

Or with SSH (if you have SSH keys set up):
```bash
git remote add origin git@github.com:YOUR-USERNAME/ra-tarot-app.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a minute or two for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/ra-tarot-app/`

## Step 5: Make Updates

After making changes to your code:

```bash
git add -A
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

## Alternative: Deploy to Netlify (Easier, Faster)

1. Go to https://app.netlify.com/
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Deploy settings:
   - Branch: `main`
   - Build command: (leave empty)
   - Publish directory: (leave empty or put `/`)
6. Click "Deploy"
7. Your site will be live at a random URL (you can customize it)
8. Every push to main auto-deploys!

## Deployment Notes

- No build step needed - this is pure HTML/CSS/JS
- Images currently load from llresearch.org
- For offline use, download images and update paths in code
- Works instantly on any static hosting (GitHub Pages, Netlify, Vercel, etc.)

## Current Git Status

✅ Repository initialized
✅ Initial commit created
✅ Branch renamed to 'main'
⏳ Ready to push to GitHub

## Next Steps After Deploying

1. Test the live site
2. Share the URL
3. Continue adding Ra quotes and symbolic descriptions
4. Consider downloading tarot images locally
5. Keep iterating!
