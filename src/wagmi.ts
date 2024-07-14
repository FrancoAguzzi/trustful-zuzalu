"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import type { Transport } from "viem";
// import { createClient } from "viem";
import { createConfig, http } from "wagmi";
import {
  mainnet,
  sepolia,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  zkSync,
  zkSyncSepoliaTestnet,
  linea,
  lineaTestnet,
  base,
  baseGoerli,
  bsc,
  bscTestnet,
} from "wagmi/chains";

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    "WalletConnect project ID is not defined. Please check your environment variables.",
  );
}

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        ledgerWallet,
        rabbyWallet,
        coinbaseWallet,
        argentWallet,
        safeWallet,
      ],
    },
  ],
  { appName: "Next-Web3-Boilerplate", projectId: walletConnectProjectId },
);

const transports: Record<number, Transport> = {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
  [polygon.id]: http(),
  [polygonMumbai.id]: http(),
  [optimism.id]: http(),
  [optimismGoerli.id]: http(),
  [arbitrum.id]: http(),
  [arbitrumGoerli.id]: http(),
  [zkSync.id]: http(),
  [zkSyncSepoliaTestnet.id]: http(),
  [linea.id]: http(),
  [lineaTestnet.id]: http(),
  [base.id]: http(),
  [baseGoerli.id]: http(),
  [bsc.id]: http(),
  [bscTestnet.id]: http(),
};

// const viemClient = createClient({
//   chain: optimism,
//   transport: http(),
// });

export const wagmiConfig = createConfig({
  chains: [
    mainnet,
    sepolia,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    zkSync,
    base,
    baseGoerli,
    bsc,
    bscTestnet,
  ],
  connectors,
  transports,
  ssr: true,
  // client: (optimism) => {
  //   return createClient({
  //     transport: http(),
  //   });
  // },
});
