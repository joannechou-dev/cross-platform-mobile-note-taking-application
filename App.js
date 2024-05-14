import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import MainContainer from './components/MainContainer';
import { ThemeProvider } from "./context/theme";
import { AuthProvider } from './context/AuthContext';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Perform any other configuration that might be needed before displaying the app
      } catch (e) {
        console.warn(e);
      } finally {
        // Set app ready state and hide the splash screen
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;  // Prevent rendering the app until it is ready
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <MainContainer />
      </ThemeProvider>
    </AuthProvider>
  );
}
