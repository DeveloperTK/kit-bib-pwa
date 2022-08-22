import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect } from 'react'
import Head from 'next/head';

import { GithubIcon, githubLink } from "../src/utils";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return <>
        <Head>
            <title>KIT Bibliothek Sitzplatz-Reservierung</title>

            <link rel="manifest" href="/manifest.json"/>

            <meta httpEquiv="content-Type" content="text/html; utf-8" />
            <meta httpEquiv="Pragma" content="cache" />
            <meta name="robots" content="INDEX,FOLLOW" />
            <meta httpEquiv="content-Language" content="de" />
            <meta httpEquiv="Reply-to" content="code@foxat.de" />
            <meta name="expires" content="" />
            <meta name="revisit-after" content="2 days" />

            <meta name="description" content="Einfaches Tool zum Finden und Buchen von Lernplätzen für Studenten des KIT und den Karlsruher Hochschulen" />
            <meta name="keywords" content="KIT, Bibliothek, KIT Bib, KIT Bibliothek, Karlsruhe, Lernplatz, Sitzplätze, Raumbuchung" />
            <meta name="author" content="Christian Schliz" />
            <meta name="publisher" content="Christian Schliz" />
            <meta name="copyright" content="Christian Schliz" />
            <meta name="audience" content="Studenten" />
            <meta name="page-type" content="HTML-Formular" />
            <meta name="page-topic" content="Bildung" />

            <meta property="og:title" content="KIT Bibliothek Sitzplatz-Reservierung" />
            <meta property="og:description" content="Einfaches Tool zum Finden und Buchen von Lernplätzen für Studenten des KIT und den Karlsruher Hochschulen" />
            <meta property="og:url" content="https://kitbib.vercel.app/" />
            <meta property="og:site_name" content="@DeveloperTK" />
            <meta property="og:type" content="object" />
            <meta property="og:image" content="/apple-touch-icon-72x72.png" />
            <meta property="og:image:alt" content="Einfaches Tool zum Finden und Buchen von Lernplätzen für Studenten des KIT und den Karlsruher Hochschulen" />

            <meta name="twitter:image:src" content="/apple-touch-icon-72x72.png" />
            <meta name="twitter:site" content="@devtk_" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="KIT Bibliothek Sitzplatz-Reservierung" />
            <meta name="twitter:description" content="Einfaches Tool zum Finden und Buchen von Lernplätzen für Studenten des KIT und den Karlsruher Hochschulen" />
        </Head>

        <div className="gh-link">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                {GithubIcon()}
            </a>
        </div>

        {/*

        Temporarily disabled

        <Component {...pageProps} />

        */}

        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
            <h1>503: Service Unavailable</h1>
            <p>
                This page was blocked, I am working on getting it fixed again.
            </p>
        </div>
    </>
}

export default MyApp
