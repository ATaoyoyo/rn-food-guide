import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';

import MealsNavigation from './navigation/MealsNavigation';

SplashScreen.preventAutoHideAsync();
enableScreens();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function fetchFonts() {
      try {
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    }

    fetchFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return <MealsNavigation onLayout={onLayoutRootView} />;
}
