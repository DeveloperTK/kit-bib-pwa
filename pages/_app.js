import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect } from 'react'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return <>
    <Head>
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
