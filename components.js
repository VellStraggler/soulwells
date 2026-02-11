const links = [
    { href: "/resume-page.html", label: "Resume" },
    { href: "/websites.html", label: "Websites" },
    { href: "/mobile-apps.html", label: "Mobile Apps" },
    { href: "/timeline.html", label: "Timeline" },
    { href: "/tetris.html", label: "Play Tetris"},
    { href: "/contact.html", label: "Contact" }
];

function Header() {
    const currentPage = window.location.pathname;
    
    console.log("currentPage:", currentPage);

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

function PortfolioEntryText({title, description, link, github=null, isVideo=false}) {
    const linkText = isVideo ? "YouTube" : "Site";
    let githubCode = null;
    if (github != null) {
        githubCode = <a href={github}>
                        Github Link
                    </a>;
    }
    return (
        <div>
            <div className="portfolio-text">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="centered-row">
                    {githubCode}
                    <a href={link}>
                        {linkText} Link
                    </a>
                </div>
            </div>
        </div>
    );
}

function IFrame({link}) {
    return (
        <iframe src={link} width="500px" height="500px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share" allowFullScreen/>
    );
}

function PortfolioEntry({title, description, imgSrc, link=null, github=null, isVideo=false}) {
    return (
        <div className="portfolio-entry">
            <PortfolioEntryText title={title} description={description}
                link={link} github={github} isVideo={isVideo}/>
            <IFrame link={link} />
        </div>

    );
}
function PortfolioEntry2({title, description, imgSrc, link, github=null, isVideo=false}) {
    return (
        <div className="portfolio-entry2">
            {/* <a href={link} className="entry-img-button">
                <img className="entry-img" src={imgSrc}></img>
            </a> */}
            <IFrame link={link} />
            <PortfolioEntryText title={title} description={description}
                link={link} github={github} isVideo={isVideo}/>
        </div>

    );
}