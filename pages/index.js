import Head from "next/head";

import AppMain from "../src/components/AppMain";
import HeaderBar from "../src/components/HeaderBar";
import FooterBar from "../src/components/FooterBar";

export default function Home() {
    return (
        <>
            <Head>
                <title>KIT Bibliothek Raumbuchung</title>
            </Head>

            <div className={"d-flex flex-column min-vh-100 bg-white"}>
                <HeaderBar />

                <AppMain />

                <FooterBar />
            </div>
        </>
    )
}
