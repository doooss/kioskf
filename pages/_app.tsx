import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalstyle';
import Head from 'next/head';
import { common } from 'store/Common';
import { observer } from 'mobx-react';

const MyApp = observer(({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{common.title}</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
