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
                    <PortfolioEntry title="AI Filtering App"
                        link="https://youtube.com/embed/gf6aHkU72IE"
                        description="Designed and implemented as part of my internship at DegaSolutions, LLC, which ended in December of 2025. Written in MudBlazor, HTML5, CSS, and C#"
                        imgSrc="assets/clean_screen_app.png" 
                        github="https://github.com/speige/CleanScreen"
                        isVideo={true}/>
                    <PortfolioEntry2 title="Pie Agenda App" 
                        link="https://youtube.com/embed/VlO8CpeSnMk"
                        github="https://github.com/VellStraggler/pie"
                        description="Created in the BYUI course Applied Programming in a team of 8, for which I was chosen as the team lead. This app is written in Dart with Flutter and is cross-platform (Android/Windows/IOS)" 
                        imgSrc="assets/pie_app.png" 
                        isVideo={true} />
                    <PortfolioEntry title="Idle Tree App" 
                        link="https://www.youtube.com/embed/AOVAmD0bHUI"
                        description="This app is a demonstration of Kotlin knowledge, displaying a tree that grows organically over time. I wrote this on a plane ride."
                        imgSrc="assets/tree_app.png" 
                        github="https://github.com/VellStraggler/tree"
                        isVideo={true}/>
                </ul>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<WebsitesPage />);