export default function FooterBar() {
    return (
        <footer className="bg-dark text-white py-3 mt-4 mt-auto">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                <li className="nav-item"><a href="https://github.com/DeveloperTK/kit-bib-pwa" className="nav-link px-2 text-white" rel="noreferrer" target="_blank">GitHub</a></li>
                <li className="nav-item"><a href="https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung" className="nav-link px-2 text-white" rel="noreferrer" target="_blank">KIT-Seite</a></li>
            </ul>
            <p className="text-center">Made with ❤️ by Christian Schliz</p>
        </footer>
    )
}