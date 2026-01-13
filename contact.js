function ContactPage() {
    return(
        <div className="page">
            <Header/>
            <Form/>
            <Footer/>
        </div>
    );
}

function Form() {
    return (
        <div className="contents">
            <div className="card">
                <div className="header">
                    <h1>Contact Me!</h1>
                    <h2>Want to Reach Out? Shoot me some mail.</h2>
                </div>
                <form className="form-section"
                    action="https://formspree.io/f/xkoonvej"
                    method="POST">
                    <div>
                        Your email:
                    </div>
                    <input type="email" name="email" />
                    <div>
                        Your message:
                    </div>
                    <textarea name="message" rows="4"></textarea>
                    <div>
                        <button type="submit">
                            Send
                            <span className="expanding-dots">
                                <span>·</span>
                                <span>·</span>
                                <span>·</span>
                                <span>·</span>
                            </span>
                            <img src="assets/send_icon.png" height="24px"></img>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<ContactPage />);