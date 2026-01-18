function MainPage() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
    return (
        <div className="contents">
            <div className="card">
                <h1>Welcome!</h1>
                <p>
                  This is my official portfolio page. You'll find a quick-download feature on my resume page,
                  links to websites I've made on my websites page, and a little personal history on my timeline.
                  Feel free to look around!
                </p>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<MainPage />);