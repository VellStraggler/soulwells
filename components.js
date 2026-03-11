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


function Pipeline({ list }) {
  if(list == null) return null;
  const adjList = list;
  const root = Object.keys(adjList)[0]; // first key as root
  return <Node node={root} adjList={adjList} />;
}

function Node({ node, adjList }) {
  const children = adjList[node] || [];

  return (
    <div className="node-container">
      <div className="node">{node}</div>

      {children.length > 0 && (
        <div className="children">
          {children.map(child => (
            <div key={child} className="child-wrapper">
              <Arrow />
              <Node node={child} adjList={adjList} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return <div className="arrow">↓</div>;
}

function Dates({dates}) {
    if (dates ==null) return null;
    return(
        <p>Created in {dates}</p>
    );
}
function Lighthouse({scores}) {
    const titles=["Performance", "Accessibility", "Best Practices", "SEO"];
    if(scores==null){
        return null;
    }
    return (
        <div>
            <h2>Lighthouse Scores: </h2>
            <div className="lighthouse-scores">
                {scores.map((child, index) => (
                    <div>
                        {titles[index]}
                        <div key={index} className="lighthouse-score">
                            {child}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
function PortfolioEntryTitle({title}) {
    return (
        <div className="portfolio-text">
            <h1>{title}</h1>
        </div>
    );
}
function PortfolioEntryText({description, link, github, isVideo, pipeline, lighthouse, dates}) {
    const linkText = isVideo ? <img width="32px" src="https://cdn.simpleicons.org/youtube/FF0000"/> : <img width="24px" src="assets/external-link-icon.png" />;
    let githubCode = null;
    if (github != null) {
        githubCode = <a href={github}>
            <img width="32px" src="https://cdn.simpleicons.org/github/000000" />
        </a>;
    }
    return (
        <div className="portfolio-text">
            <p>{description}</p>
            <Pipeline list={pipeline}/>
            <Lighthouse scores={lighthouse}/>
            <div className="footer">
                <Dates dates={dates}/>
                <div>
                    {githubCode}
                    <a href={link}>
                        {linkText}
                    </a>
                </div>
            </div>
        </div>
    );
}

function IFrame({link}) {
    return (
        <div className="iframe">
            <iframe src={link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share" allowFullScreen/>
        </div>
    );
}

function PortfolioEntry({title, description, dates, link=null, github=null, isVideo=false, pipeline=null, lighthouse=null}) {
    return (
        <div>
            <PortfolioEntryTitle title={title}/>
            <div className="portfolio-entry">
                <PortfolioEntryText description={description}
                    link={link} github={github} isVideo={isVideo} dates={dates} pipeline={pipeline} lighthouse={lighthouse}/>
                <IFrame link={link} />
            </div>
        </div>

    );
}
function PortfolioEntry2({title, description, dates, link=null, github=null, isVideo=false, pipeline=null, lighthouse=null}) {
    return (
        <div>
            <PortfolioEntryTitle title={title}/>
            <div className="portfolio-entry2">
                <IFrame link={link} />
                <PortfolioEntryText title={title} description={description}
                    link={link} github={github} isVideo={isVideo} dates={dates} pipeline={pipeline} lighthouse={lighthouse}/>
            </div>
        </div>

    );
}