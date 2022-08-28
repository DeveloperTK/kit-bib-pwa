import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (_: NextApiRequest, res: NextApiResponse) => {
    res.status(302).redirect("https://github.com/DeveloperTK/kit-bib-pwa")
}

export default handler;