import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "ethereum";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      clientId="963ed92e2f4b9d38b122c31c1a13433f"
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
