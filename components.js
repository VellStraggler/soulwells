const links = [
    { href: "resume-page.html", label: "Resume" },
    { href: "websites.html", label: "Websites" },
    { href: "mobile-apps.html", label: "Mobile Apps" },
    { href: "timeline.html", label: "Timeline" },
    { href: "contact.html", label: "Contact" },
    { href: "tetris.html", label: "Play Tetris"}
];

function Header() {
    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    return (
        <header>
            <a className="page-title" href="index.html">
                <h1 className="page-title">David A. Wells</h1>
            </a>
            <div className="header-links">
                {links.map(({ href, label }) => (
                    <a key={href} href={href}
                    className={`hlink ${currentPage === href ? "active" : ""}`}>
                        {label}
                    </a>
                ))}
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            David A. Wells, 2026
        </footer>
    );
}

function PortfolioEntry({title, description, imgSrc, link}) {
    return (
        <div className="portfolio-entry">
            <div>
                <div className="portfolio-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <a href={link} className="entry-img-button">
                <img className="entry-img" src={imgSrc}></img>
            </a>
        </div>

    );
}
function PortfolioEntry2({title, description, imgSrc, link}) {
    return (
        <div className="portfolio-entry2">
            <a href={link} className="entry-img-button">
                <img className="entry-img" src={imgSrc}></img>
            </a>
            <div>
                <div className="portfolio-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    );
}