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
    const pipeline1 = {
    "GitHub React/Vite Site": ["AWS API Gateway", "Formspree"],
    "AWS API Gateway": ["AWS Lambda"],
    "AWS Lambda": ["AWS S3 (database)", "Braintree (payment)", "AWS SES (emailing)"]
    };
    const pipeline2 = {"Elementor Site": ["Formspree"]}
    const pipeline3 = {"GitHub React Site": ["Formspree"]}
    const pipeline4 = {"Weebly Site": ["Formspree"]}
    return (
        <div className="contents">
            <div className="card">
                <div className="header-left">
                    <h1>Website Portfolio - Clients</h1>
                    <p>Here are official websites I've made for clients, particularly small business owners. Each one was made to 100% satisfaction, exactly what they wanted and more.</p>
                </div>
                <ul>
                    <PortfolioEntry title="Scripture Creations: E-Commerce Site" 
                        description="This site had a simple goal: be an online store. Purchases are made. Receipts are auto-emailed. A simple push auto-publishes the site and updates the S3 bucket with a new product catalog. Designed to be both affordable and fast."
                        pipeline={pipeline1}
                        lighthouse={[96, 89, 100, 91]}
                        dates="February 2026"
                        imgSrc="assets/scripture_preview.png" 
                        link="https://vellstraggler.github.io/Scripture-Creations/"
                        github="https://github.com/VellStraggler/Scripture-Creations"/>
                    <PortfolioEntry2 title="Edefying Official Site" 
                        description="Commissioned by Edefying and made using Elementor. Includes a fully functional contact-me page." 
                        imgSrc="assets/edefying_preview.png"
                        pipeline={pipeline2}
                        dates="November 2024"
                        link="https://edefying.com"/>
                    <PortfolioEntry title="TDL Proposed Site" 
                        description="Created first in HTML5 and then redone in Elementor, this was the first professional site I ever made. It was made with the intent to sell to TDL construction."
                        imgSrc="assets/tdl_preview.png" 
                        pipeline={pipeline3}
                        dates="September 2024"
                        link="https://tdl-construction.soulwells.us/"
                        github="https://github.com/VellStraggler/TDL-site"/>
                    <PortfolioEntry2 title="Dara Luci Studio Official Site" description="This portfolio site is hosted on Weebly. Email collection work goes through Formspree. "
                        pipeline={pipeline4}
                        dates="January 2025"
                        imgSrc="assets/daraluci_preview.png" link="https://daraluci.weebly.com/"/>
                </ul>
                <div className="header-left">
                    <h1>Website Portfolio - Personal Projects</h1>
                    <p>These are non-business websites I've worked on which nonetheless increased my understanding of website building.</p>
                </div>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<WebsitesPage />);