import type { WalletDetailsParams } from "@rainbow-me/rainbowkit";
import { createConnector } from "@wagmi/core";
import type { EIP1193RequestFn, Transport, WalletRpcSchema } from "viem";
import { burner } from "../../burnerConnector/burner.js";

type Provider = ReturnType<Transport<"custom", Record<any, any>, EIP1193RequestFn<WalletRpcSchema>>>;

export const rainbowkitBurnerConnector = (walletDetails: WalletDetailsParams) => {
  return createConnector<Provider>((config) => ({
    ...burner()(config),
    ...walletDetails,
  }));
};

export const rainbowkitSessionStorageBurnerConnector = (walletDetails: WalletDetailsParams) => {
  return createConnector<Provider>((config) => ({
    ...burner({ useSessionStorage: true })(config),
    ...walletDetails,
  }));
};
