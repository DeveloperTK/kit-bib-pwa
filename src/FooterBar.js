import { githubLink } from "./utils";

export default function FooterBar() {
    return (
        <footer className="bg-dark text-white py-3 mt-4 mt-auto">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                <li className="nav-item"><a href={ githubLink } className="nav-link px-2 text-white" rel="noreferrer" target="_blank">GitHub</a></li>
                <li className="nav-item"><a href="https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung" className="nav-link px-2 text-white" rel="noreferrer" target="_blank">KIT-Seite</a></li>
            </ul>
            <p className="text-center">Made with ❤️ by Christian Schliz</p>

            <p className="mt-4 mb-0 text-center text-secondary">
                Build ID: { process.env.CONFIG_BUILD_ID === 'development' ? 'indev_not_applicable' :
                process.env.CONFIG_BUILD_ID.substr(0, 7) }
            </p>
        </footer>
    )
}