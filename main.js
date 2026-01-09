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
                Under Construction
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<MainPage />);