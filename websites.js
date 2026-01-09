function WebsitesPage() {
  return (
    <div className="page">
      <Header />
      <Websites />
      <Footer />
    </div>
  );
}

function Websites() {
    return (
        <div className="contents">
            <div className="card">
                <div className="header">
                    <h1>Website Portfolio</h1>
                </div>
                <ul>
                    <li><a href="https://edefying.com">Edefying</a></li>
                    <li><a href="https://tdl-construction.soulwells.us/">TDL Construction: Proposed Site</a></li>
                    <li><a href="https://daraluci.weebly.com/">Dara Luci Studio</a></li>
                </ul>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<WebsitesPage />);