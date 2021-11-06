import Head from "next/head";

import AppMain from "../src/main/AppMain";
import HeaderBar from "../src/HeaderBar";
import FooterBar from "../src/FooterBar";

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
