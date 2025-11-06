import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.farmerspos.vapeverse',
  appName: 'VapeVerse',
  webDir: 'dist/public',
  server: {
    // Use your Render deployment URL for API calls
    url: process.env.CAPACITOR_SERVER_URL,
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      showSpinner: false
    }
  }
};

export default config;
