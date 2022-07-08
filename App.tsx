import { StoreProvider } from 'easy-peasy';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './store';
import Rehydrated from './store/rehydrated';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <Rehydrated>
            <Navigation colorScheme={colorScheme} />
          </Rehydrated>
        </StoreProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
