import type { AppProps } from "next/app";
import "@/src/styles/App.scss";
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import Head from "next/head";
import { Layouts } from "@/src/components/Layouts";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BreakpointProvider>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </BreakpointProvider>
    </>
  );
}
