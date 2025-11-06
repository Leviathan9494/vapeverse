# Render Deployment Guide

## Step-by-Step Deployment on Render (Free Tier)

### 1. Create Render Account
Visit: https://render.com
- Sign up with GitHub

### 2. Push to GitHub (If Not Already)
```bash
# Check remote
git remote -v

# If no remote, create GitHub repo and push
# Visit github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/vapeverse.git
git push -u origin main
```

### 3. Create PostgreSQL Database
- In Render dashboard, click "New +"
- Select "PostgreSQL"
- Name: `vapeverse-db`
- Choose free tier
- Click "Create Database"
- **Copy the Internal Database URL** (starts with `postgresql://`)

### 4. Create Web Service
- Click "New +" → "Web Service"
- Connect your GitHub repository
- Select the VapeVerse repo
- Configure:
  - **Name:** `vapeverse`
  - **Region:** Choose closest to you
  - **Branch:** `main`
  - **Root Directory:** (leave empty)
  - **Environment:** `Node`
  - **Build Command:** `npm install && npm run build`
  - **Start Command:** `npm run start`
  - **Plan:** Free

### 5. Add Environment Variables
In the "Environment" section, add:
- `DATABASE_URL` = (paste the Internal Database URL from step 3)
- `SESSION_SECRET` = (generate random string, e.g., `openssl rand -base64 32`)
- `NODE_ENV` = `production`
- `PORT` = `5000`

### 6. Deploy!
- Click "Create Web Service"
- Render will build and deploy your app
- You'll get a URL like: `https://vapeverse.onrender.com`

### 7. Initialize Database
After deployment, run migrations:
```bash
# In Render dashboard, go to your service
# Click "Shell" tab
# Run:
npm run db:push
```

## ⚠️ Free Tier Notes:
- App spins down after 15 min of inactivity
- First request after spindown takes ~30 seconds
- Upgrade to paid plan ($7/mo) for always-on service

## Your App Will Be Live! 🎉
Anyone can access it via the Render URL.
