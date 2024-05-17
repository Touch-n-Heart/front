import React from "react";
// Navigator
import { AppNavigator } from "./src/navigation";
import { WagmiConfig } from 'wagmi';
import { Web3Modal, wagmiConfig } from './src/web3modal';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// react-redux Provider 待接入
const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Web3Modal />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </WagmiConfig>
  );
}

export default App;
