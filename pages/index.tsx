import Head from "next/head";

import HeaderBar from "@/components/layout/HeaderBar";
import FooterBar from "@/components/layout/FooterBar";
import AppMain from "@/components/layout/AppMain";
import { NextPage } from "next";

import { GithubIcon, githubLink } from "@/src/utils";
import { useState } from "react";

const Home: NextPage = () => {
    let [viewIndex, setViewIndex] = useState(0);

    return (
        <>
            <Head>
                <title>KIT Bibliothek Sitzplatzreservierung</title>
            </Head>

            <div className="gh-link">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    {GithubIcon()}
                </a>
            </div>

            <div className={"d-flex flex-column min-vh-100 bg-white"}>
                <HeaderBar onChangeViewIndex={setViewIndex} />

                <AppMain viewIndex={viewIndex} />

                <FooterBar />
            </div>
        </>
    )
}

export default Home;