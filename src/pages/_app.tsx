import "@/styles/globals.css";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

const font = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const toastOptions = {
  error: {
    style: {
      background:
        typeof window !== "undefined"
          ? getComputedStyle(document.documentElement).getPropertyValue(
              "--error"
            )
          : "#ef4444",
      color: "#fff",
    },
  },
};

function getWeb3ProviderLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  return library;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}
      </style>
      <Web3ReactProvider getLibrary={getWeb3ProviderLibrary}>
        <Component {...pageProps} />
        <Toaster toastOptions={toastOptions} />
      </Web3ReactProvider>
    </>
  );
}
