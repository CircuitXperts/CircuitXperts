import type { AppProps } from "next/app";
import "@/src/styles/App.scss";
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import Head from "next/head";
import { Layouts } from "@/src/components/Layouts";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { store } from "../store";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CircuitXperts | Electronic Design and Manufacturing Solutions"
        />
        <meta
          name="twitter:description"
          content="FPGA design, Signal Integrity, Power Integrity, PCB Manufacturing, Test Code development, Embedded Software, IP Core design, CircuitXperts"
        />
        <meta
          name="twitter:image"
          content="https://www.circuitxperts.com/images/circuit-xperts-logo.svg"
        />
      </Head>
      <DefaultSeo
        title="CircuitXperts | Electronic Design and Manufacturing Solutions"
        description="CircuitXperts provides cutting-edge electronic design and manufacturing services including FPGA design, SI Analysis, PI, PCB Manufacturing, and Embedded Software."
        canonical={process.env.NXT_SITE_URL + router.asPath}
        openGraph={{
          type: "website",
          url: process.env.NXT_SITE_URL + router.asPath,
          title:
            "CircuitXperts | Electronic Design and Manufacturing Solutions",
          description:
            "FPGA design, Signal Integrity, Power Integrity, PCB Manufacturing, Test Code development, Embedded Software, IP Core design, CircuitXperts",
          site_name: "CircuitXperts",
          images: [
            {
              url: process.env.NXT_SITE_URL + "/images/circuit-xperts-logo.svg",
              width: 180,
              height: 72,
              alt: "Logo",
              type: "image/svg",
            },
          ],
        }}
      />
      <Provider store={store}>
        <BreakpointProvider>
          <Layouts>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
          </Layouts>
        </BreakpointProvider>
      </Provider>
    </>
  );
}
