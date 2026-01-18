function TimelinePage() {
  return (
    <div className="page">
      <Header />
      <div className="contents">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

function Timeline() {
    return(
        <div className="timeline">
            <TimelineEntry date="December 2025" title="Graduated with a Bachelor's Degree in Computer Science"
                subtitle="Brigham Young University - Idaho" index={-1}/>
            <TimelineEntry date="October 2024" title="Decided on a Bachelor's over an Associate's"/>
            <TimelineEntry date="October 2023" title="Completed Certification in AWS Backend Development"
                subtitle="Bloom Institute of Technology"/>
            <TimelineEntry date="September 2020" title="Began my first semester at BYUI"/>
            <TimelineEntry date="September 2019" title="Introduced to Java"
                subtitle="Kamiak High School"/>
            <TimelineEntry date="July 2017" title="Made Tron Game in Scratch" index={1}/>
        </div>
    );
}
function TimelineShape({n}) {
    if(n < 0) {
        return(
        <div className="timeline-shapes">
            <div className="blank-line"></div>
            <div className="circle"></div>
            <div className="line"></div>
        </div>
        );
    }
    if(n > 0) {
        return(
            <div className="timeline-shapes">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="blank-line"></div>
        </div>
        );
    } else {
        return(
        <div className="timeline-shapes">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
        </div>
        );
    }
}
function TimelineEntry({date, title, subtitle, index}) {
    return (
        <div className="timeline-entry">
            <div className="timeline-date">
                <h1>{date}</h1>
            </div>
            <TimelineShape n={index}/>
            <div className="timeline-info">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </div>
        </div>
    );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<TimelinePage />);