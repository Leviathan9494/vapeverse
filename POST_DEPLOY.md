# Post-Deployment Steps

## Initialize Database Schema

After your app is deployed on Render, you need to push the database schema:

### Option 1: Using Render Shell (Recommended)
1. Go to your Render dashboard
2. Click on your `vapeverse` web service
3. Click the **"Shell"** tab at the top
4. Run this command:
   ```bash
   npm run db:push
   ```

### Option 2: Using Local Environment
1. Copy your DATABASE_URL from Render
2. Run locally:
   ```bash
   export DATABASE_URL="your-database-url-from-render"
   npm run db:push
   ```

This will create all the necessary tables in your PostgreSQL database.

## Your App URL
Your app should be live at: `https://vapeverse.onrender.com` (or similar)

## Testing
- Open the URL in your browser
- The app should load
- Share the URL with others to access it!

## Troubleshooting
If you see errors:
- Check the logs in Render dashboard
- Verify all environment variables are set correctly
- Make sure database initialization completed successfully
