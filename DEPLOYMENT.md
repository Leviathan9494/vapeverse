# VapeVerse Deployment Guide

## Overview
VapeVerse is a full-stack application with:
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Express.js
- **Database**: PostgreSQL (Neon)

## Deployment Options

### 1. Deploy on Replit (Recommended - Already Configured)

Your app is already configured for Replit deployment. The `.replit` file contains all necessary configuration.

**Steps:**
1. Make sure you're in a Replit workspace
2. Set up environment variables in Replit Secrets:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `SESSION_SECRET` - A secure random string
   - `OPENAI_API_KEY` - (Optional) If using AI features

3. Click the "Deploy" button in Replit
4. Choose "Autoscale" deployment (already configured)
5. Your app will be built and deployed automatically

**Local Testing:**
```bash
npm install
npm run dev
```
Access at: http://localhost:5000

---

### 2. Deploy on Vercel

Vercel is great for the frontend, but requires separate backend hosting.

**Frontend Only (Static):**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Deploy the `dist/public` folder

**Full-Stack with Vercel:**
- Use Vercel for frontend
- Deploy backend separately (Railway, Render, or Fly.io)

---

### 3. Deploy on Railway

Railway supports full-stack apps with PostgreSQL.

**Steps:**
1. Create account at [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Add PostgreSQL database
4. Set environment variables:
   - `DATABASE_URL` (auto-generated)
   - `SESSION_SECRET`
   - `OPENAI_API_KEY` (optional)
   - `PORT=5000`
5. Deploy automatically on push

**Build Command:** `npm run build`
**Start Command:** `npm run start`

---

### 4. Deploy on Render

**Steps:**
1. Create account at [render.com](https://render.com)
2. Create new "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Environment:** Node
5. Add PostgreSQL database (or use Neon)
6. Set environment variables

---

### 5. Deploy on Fly.io

**Steps:**
1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Login: `fly auth login`
3. Create fly.toml (see below)
4. Deploy: `fly deploy`

**fly.toml:**
```toml
app = "vapeverse"

[build]
  builder = "heroku/buildpacks:20"

[env]
  PORT = "8080"
  NODE_ENV = "production"

[[services]]
  internal_port = 8080
  protocol = "tcp"

  [[services.ports]]
    port = 80
    handlers = ["http"]

  [[services.ports]]
    port = 443
    handlers = ["tls", "http"]
```

---

### 6. Deploy on DigitalOcean App Platform

**Steps:**
1. Create account at [digitalocean.com](https://digitalocean.com)
2. Go to App Platform
3. Create app from GitHub
4. Configure:
   - **Build Command:** `npm run build`
   - **Run Command:** `npm run start`
5. Add managed PostgreSQL database
6. Set environment variables

---

## Environment Variables Required

```bash
DATABASE_URL=postgresql://user:password@host:5432/database
PORT=5000
NODE_ENV=production
SESSION_SECRET=your-secure-secret-key
OPENAI_API_KEY=sk-... # Optional
```

## Database Setup

Your app uses Neon PostgreSQL. To set up:

1. Create database at [neon.tech](https://neon.tech)
2. Copy connection string
3. Set `DATABASE_URL` environment variable
4. Run migrations: `npm run db:push`

## Building for Production

```bash
# Install dependencies
npm install

# Build frontend and backend
npm run build

# Start production server
npm run start
```

## Testing the Build Locally

```bash
# Build the app
npm run build

# Set environment variables
export DATABASE_URL="your-db-url"
export SESSION_SECRET="your-secret"
export NODE_ENV="production"

# Run production server
npm run start
```

## Post-Deployment Checklist

- [ ] Database is accessible and migrated
- [ ] Environment variables are set
- [ ] HTTPS is enabled
- [ ] Domain is connected (optional)
- [ ] Session secret is secure
- [ ] Database backups enabled
- [ ] Monitoring/logs configured

## Troubleshooting

**Build Failures:**
- Check Node version (should be 20+)
- Verify all dependencies are installed
- Check build logs for errors

**Database Connection Issues:**
- Verify DATABASE_URL is correct
- Check database is accessible from deployment
- Run migrations: `npm run db:push`

**Runtime Errors:**
- Check environment variables
- Review server logs
- Ensure PORT is correctly set

## Support

For issues, check:
- Server logs in your deployment platform
- Browser console for frontend errors
- Database connection status
