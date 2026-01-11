const links = [
    { href: "resume-page.html", label: "Resume" },
    { href: "websites.html", label: "Websites" },
    { href: "index.html", label: "Mobile Apps" },
    { href: "index.html", label: "Timeline" },
    { href: "index.html", label: "Contact" },
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