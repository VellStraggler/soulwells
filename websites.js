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
                    <p>Here are official websites I've made for clients, particularly small business owners. Each one was made to 100% satisfaction, exactly what they wanted and more.</p>
                </div>
                <ul>
                    <PortfolioEntry title="Edefying Official Site" description="Commissioned by Edefying and made using Elementor. Includes a fully functional contact-me page." 
                        imgSrc="assets/edefying_preview.png" link="https://edefying.com"/>
                    <PortfolioEntry2 title="TDL Proposed Site" description="Created first in HTML5 and then redone in Elementor, this was the first professional site I ever made. It was made with the intent to sell to TDL construction."
                        imgSrc="assets/tdl_preview.png" link="https://tdl-construction.soulwells.us/"/>
                    <PortfolioEntry title="Dara Luci Studio Official Site" description="This was made in Weebly in 5 hours. It's a portfolio site which includes a functional contact-me page"
                        imgSrc="assets/daraluci_preview.png" link="https://daraluci.weebly.com/"/>
                    <PortfolioEntry2 title="Scripture Creations E-Commerce Site" description="This is a work in progress, scheduled to be done January 24th, 2026. The frontend is React exported with Vite, and converts a simple excel file for its product catalog. It's hosted on github and is planned to handle transactions using AWS Lambda, which will be triggered to go well before purchases are made. Designed to be affordable, fast, and attractive."
                        imgSrc="assets/scripture_preview.png" link="https://vellstraggler.github.io/Scripture-Creations/"/>
                </ul>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<WebsitesPage />);