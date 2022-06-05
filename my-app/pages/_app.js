import "../styles/global.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.8/ethers.umd.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}

export default MyApp;
