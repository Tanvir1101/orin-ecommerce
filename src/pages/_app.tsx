import Head from "next/head";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core";
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "../../components/layouts/navBar";
import Footer from "../../components/layouts/footer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
