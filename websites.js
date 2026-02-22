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
                <div className="header-left">
                    <h1>Website Portfolio</h1>
                    <p>Here are official websites I've made for clients, particularly small business owners. Each one was made to 100% satisfaction, exactly what they wanted and more.</p>
                </div>
                <ul>
                    <PortfolioEntry title="Scripture Creations E-Commerce Site" 
                        description="This is a work in progress, scheduled to release February 23th, 2026. Made React with Vite, and converts a simple excel file for its product catalog. It's hosted on github and is planned to handle transactions using an optimized AWS Lambda function. Designed to be both affordable and fast."
                        imgSrc="assets/scripture_preview.png" 
                        link="https://vellstraggler.github.io/Scripture-Creations/"
                        github="https://github.com/VellStraggler/Scripture-Creations"/>
                    <PortfolioEntry2 title="Edefying Official Site" 
                        description="Commissioned by Edefying and made using Elementor. Includes a fully functional contact-me page." 
                        imgSrc="assets/edefying_preview.png" 
                        link="https://edefying.com"/>
                    <PortfolioEntry title="TDL Proposed Site" 
                        description="Created first in HTML5 and then redone in Elementor, this was the first professional site I ever made. It was made with the intent to sell to TDL construction."
                        imgSrc="assets/tdl_preview.png" 
                        link="https://tdl-construction.soulwells.us/"
                        github="https://github.com/VellStraggler/TDL-site"/>
                    <PortfolioEntry2 title="Dara Luci Studio Official Site" description="This was made in Weebly in 5 hours. It's a portfolio site which includes a functional contact-me page"
                        imgSrc="assets/daraluci_preview.png" link="https://daraluci.weebly.com/"/>
                </ul>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<WebsitesPage />);