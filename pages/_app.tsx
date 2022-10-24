import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
