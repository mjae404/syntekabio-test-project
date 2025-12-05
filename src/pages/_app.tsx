import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

type AppPropsWithExtra = AppProps & {
  pageProps: AppProps['pageProps'] & { isMobile?: boolean };
};

export default function App({ Component, pageProps }: AppPropsWithExtra) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <title>신테카바이오</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
