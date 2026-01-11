function ResumePage() {
  return (
    <div className="page">
        <Header />
        <div className="resume">
            <ResumeDownload link="resume.pdf" />
            <Resume />
            <ViewRaw />
        </div>
        <Footer />
    </div>
  );
}

function ViewRaw() {
    return (
        <div className="view-raw">
            <a href="resume-raw.html">View Raw</a>
        </div>
    );
}
function Download({link}) {
  return(
    <a href={link} download><img src="assets/download_icon.png" alt="download here"></img></a>
  );
}
function ResumeDownload({link}) {
  return(
    <div className="resume-download-container">
        <a href={link} className="resume-download" download>
        <img src="assets/download_icon.png" alt="download here"></img>
        </a>
    </div>
  );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<ResumePage />);