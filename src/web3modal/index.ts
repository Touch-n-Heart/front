import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  W3mButton,
  Web3Modal,
  useWeb3ModalState,
} from '@web3modal/wagmi-react-native';
import { chains, metadata, projectId } from './common';
import { Connector as WagmiConnector } from '@wagmi/core';

interface Config extends ReturnType<typeof defaultWagmiConfig> {
}
interface WagmiConfig extends Config {
  connectors: WagmiConnector[];
}

// Create Wagmi config
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata }) as WagmiConfig;

// Init Web3Modal RN SDK
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

// Re-export components
export {
  wagmiConfig,
  useWeb3Modal,
  W3mButton,
  Web3Modal,
  useWeb3ModalState,
};
