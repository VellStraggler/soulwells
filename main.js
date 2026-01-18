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
            <div className="welcome">
                <div className="welcome-text"> 
                  <img src="assets/mee.jpg"></img>
                  <h1>Welcome!</h1>
                  <p>
                    This is my official portfolio page. You'll find a quick-download feature on my resume page,
                    links to websites I've made on my websites page, and a little personal history on my timeline.
                    Feel free to look around!
                  </p>
                  <h2>Just a little bit about me</h2>
                  <p>I like programming, and graphics/UI in particular, but I've also worked
                    as a professional pianist, especially for weddings. Currently, I live in the lovely town of Pleasant Grove
                    with my wife, Madi. Our first day married was spent driving up to Idaho so I could start my semester the next
                    day. It was intense! And I decided I could finish my degree and improve my GPA with 20 credits in a single
                    semester. Still gives me homework nightmares!
                  </p>
                  <p>
                    I was big on art in high school, and have a Youtube music channel I haven't touched since early 2025, but I 
                    want to get back into it after I get employed in the CS field.
                  </p>
                  <p>
                    Here's a picture of me from the day of my wedding. You'll find it in all my social media profiles since I don't 
                    really take pictures of myself otherwise.
                  </p>
                </div>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<MainPage />);