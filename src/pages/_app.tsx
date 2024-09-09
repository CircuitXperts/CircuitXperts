import type { AppProps } from "next/app";
import "@/src/styles/App.scss";
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import Head from "next/head";
import { Layouts } from "@/src/components/Layouts";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title="CircuitXperts | Electronic Design and Manufacturing Solutions"
        description="CircuitXperts provides cutting-edge electronic design and manufacturing services including FPGA design, SI Analysis, PI, PCB Manufacturing, and Embedded Software."
        canonical={router.asPath}
        openGraph={{
          url: router.asPath,
          title:
            "CircuitXperts | Electronic Design and Manufacturing Solutions",
          description:
            "FPGA design, Signal Integrity, Power Integrity, PCB Manufacturing, Test Code development, Embedded Software, IP Core design, CircuitXperts",
          images: [
            {
              url: "/images/circuit-xperts-logo.svg",
              width: 180,
              height: 72,
              alt: "Logo",
              type: "image/svg",
            },
          ],
        }}
      />
      <BreakpointProvider>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </BreakpointProvider>
    </>
  );
}
