function WebsitesPage() {
  return (
    <div className="page">
      <Header />
      <MobileApps />
      <Footer />
    </div>
  );
}

function MobileApps() {
    return (
        <div className="contents">
            <div className="card">
                <div className="header">
                    <h1>Mobile Applications Portfolio</h1>
                    <p></p>
                </div>
                <ul>
                    <PortfolioEntry title="Pie Agenda App" description="Created in the BYUI course Applied Programming in a team of 8, for which I was chosen as the team lead. This app is written in Dart with Flutter and is cross-platform (Android/Windows/IOS)" 
                        imgSrc="assets/pie_app.png" link="https://github.com/VellStraggler/pie"/>
                    <PortfolioEntry2 title="AI Filtering App" description="Designed and implemented as part of my internship at DegaSolutions, LLC, which ended in December of 2025. Written in MudBlazor, HTML5, CSS, and C#"
                        imgSrc="assets/clean_screen_app.png" link="https://github.com/speige/CleanScreen"/>
                    <PortfolioEntry title="Idle Tree App" description="This app is a demonstration of Kotlin knowledge, displaying a tree that grows organically over time. I wrote this on a plane ride."
                        imgSrc="assets/tree_app.png" link="https://github.com/VellStraggler/tree"/>
                </ul>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<WebsitesPage />);