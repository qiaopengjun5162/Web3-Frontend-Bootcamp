import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  // base,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';
import App from "./App";



const config = getDefaultConfig({

  appName: 'My RainbowKit App',

  projectId: 'YOUR_PROJECT_ID',

  chains: [mainnet, polygon, optimism, arbitrum, base],

  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [mainnet.chainId]: ["https://mainnet.infura.io/v3/20d56713599a43fb83df21e2fdfb5a8c"],
  },

});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);


