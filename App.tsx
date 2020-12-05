import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './src/routes/routes';

export default function App() {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Route />
      </SafeAreaProvider>
    );
}
