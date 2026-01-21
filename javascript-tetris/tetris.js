const { useEffect } = React;

function Tetris() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "javascript-tetris/tetris-engine.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="card">
      <div className="header">
        <h1>Tetris!</h1>
        <p>I injected this program by jakesgordon from a Github repo of his. It took me about 30 minutes. 
          Just more proof that I can work with other people's work easily.</p>
      </div>
      <div id="tetris">
        <div id="menu">
          <p id="start">
            <div>Press Space to Play.</div>
          </p>
          <p><canvas id="upcoming"></canvas></p>
          <p>score <span id="score">00000</span></p>
          <p>rows <span id="rows">0</span></p>
        </div>

        <canvas id="canvas"></canvas>
      </div>
      <p>Game written by <a href="https://github.com/jakesgordon/javascript-tetris">jakesgordon</a></p>
    </div>
  );
}

function TetrisPage() {
  return (
    <div className="page">
      <Header />
      <div className="contents">
        <Tetris />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root"))
  .render(<TetrisPage />);
