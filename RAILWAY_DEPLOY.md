# Railway Deployment for VapeVerse

## Quick Setup Steps:

### 1. Create Railway Account
Visit: https://railway.app
- Sign up with GitHub (recommended)

### 2. Create New Project
- Click "New Project"
- Select "Deploy from GitHub repo"
- Connect your GitHub account if not already connected
- Select the VapeVerse repository

### 3. Add PostgreSQL Database
- In your project, click "New"
- Select "Database" → "Add PostgreSQL"
- Railway will automatically create DATABASE_URL environment variable

### 4. Configure Environment Variables
Railway will auto-detect most settings, but add these:
- `SESSION_SECRET` - Generate a random string (e.g., use: https://randomkeygen.com/)
- `OPENAI_API_KEY` - (Optional, if using AI features)

### 5. Deploy Settings (Auto-detected from package.json)
Railway will automatically use:
- **Build Command:** `npm run build`
- **Start Command:** `npm run start`
- **Port:** 5000 (from your code)

### 6. Deploy!
- Railway will automatically deploy on every git push
- You'll get a public URL like: `https://your-app.up.railway.app`

## If You Don't Have GitHub Repo Yet:

Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create vapeverse --public --source=. --remote=origin --push
```

Or create manually on GitHub and push:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/vapeverse.git
git push -u origin main
```

## Alternative: Deploy via CLI

Install Railway CLI:
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

Your app will be live with full backend + database support!
