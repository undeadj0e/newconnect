import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ConnectWallet
        theme="light"
        modalSize="compact"
        btnTitle="Connect Wallet"
      />
    </div>
  );
}
