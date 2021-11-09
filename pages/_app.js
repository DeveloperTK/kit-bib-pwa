import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect } from 'react'

import Head from 'next/head';
import { GithubIcon, githubLink } from "../src/utils";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return <>
    <Head>
      <link rel="manifest" href="/manifest.json" />
    </Head>

    <div className="gh-link">
      <a href={ githubLink } target="_blank" rel="noopener noreferrer">
        { GithubIcon() }
      </a>
    </div>

    <Component {...pageProps} />
  </>
}

export default MyApp
