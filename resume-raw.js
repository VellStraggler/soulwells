function Job({title, meta, descriptions}) {
  return (
    <div className="job">
      <div className="job-header">
        <div className="title">{title}</div>
        <div className="job-meta">{meta}</div>
      </div>
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
function Project({name, link, description}) {
    return (
        <li>
            <a href={link} className="title">{name}:</a>{" "}
            {description}
        </li>
    );}
function SchoolProject({name, link, linkName, description}) {
    if (name && linkName) {
        name = name + " ";
    }
    return (
        <li>
            <span className="title">{name}</span>
              <a href={link}>{linkName}</a>:{" "}
            {description}
        </li>
    );}

function ResumeRaw() {
  return (
    <div className="resume">
      <Resume />
    </div>
  )
}

function Resume() {
  return (
      <div>
        {/* <!-- Header --> */}
        <div className="header">
          <h1>David A. Wells</h1>
          <div className="contact">
            <span>
                <a href="https://maps.app.goo.gl/G8GZF1Nj1rt8tvKXA">Pleasant Grove, UT</a>
            </span>
            <span>
                <a href="tel:+12069462879">(206) 946-2879</a>
            </span>
            <span>
              <a href="mailto:david@incwells.com">david@incwells.com</a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/david-aaron-wells/">LinkedIn</a>
            </span>
            <span>
              <a href="https://soulwells.us/"><div className="title">Portfolio Site ☆</div></a>
            </span>
          </div>
        </div>
        
        {/* <!-- Main Content --> */}
        <div className="content">
          {/* <!-- Left Column --> */}
          <div>
            <section>
              <h2>Education</h2>
              <div className="job-header">
                <h3>Brigham Young University – Idaho</h3>
                <div className="job-meta">Sept. 2020 – Dec. 2025</div>
              </div>
              <div className="subheading">
                Bachelor's Degree in Computer Science with an emphasis in Machine Learning · GPA: 3.23
              </div>
              {/* <div className="subheading"> (AI)</div> */}

              <ul>
                <SchoolProject name="Senior Project –" link="https://www.youtube.com/watch?v=cRJ2EqHhD7Q" linkName="Physics-Based Music Visualizer"
                    description="One-click audio-to-video generator with real-time playback. Written in C++ using GLFW and OpenGL."/>
                <SchoolProject name="Team Leader –"linkName="Pie Agenda App" link="https://www.youtube.com/shorts/VlO8CpeSnMk"
                    description="Led team of 8 in building an app for Android/iOS/Windows. Written in Dart using Flutter. Designed class system and UX/UI, delegated tasks, and kept us on schedule."/>
                <SchoolProject link="https://github.com/elinorewickard/cse_final_project"
                    name="Team Leader –" linkName="Game: Wall of Fire" description="Led team of 3 to create a 3D side-scroller in Python. Ranked #1 for best graphics."/>
                <SchoolProject name="Academic Highlight" description="Improved GPA while taking 20 final credits."/>
              </ul>
              <div className="job-header">
                <h3>Bloom Institute of Technology</h3>
                <div className="job-meta">Sept. 2020 – Dec. 2025</div>
              </div>
              <div className="subheading">
                Certification in AWS Backend Development
              </div>
              <ul>
                <SchoolProject name="Senior Project – ASCII-to-Image Markdown Renderer"
                    description="AWS Lambda calls in Java for DDB uploads of rendered images; frontend in JS and HTML."/>
              </ul>
            </section>
            
            <section>
              <h2>Experience</h2>
              
              <div className="job">
                <div className="job-header">
                  <div className="title">Freelance Full Stack Website Contractor ☆</div>
                  <div className="job-meta">Oct. 2024 – Present</div>
                </div>
                <ul>
                  <li>
                    Engineered a serverless E-commerce site with auto-emailing, Braintree payment handling, and a backend using AWS Lambda, S3, API Gateway, and SES. Hosted on GitHub Pages as a responsive, componented React site and designed for security, maintainability, and efficiency. Made for the company  
                    {" "}<a href="https://vellstraggler.github.io/Scripture-Creations">Scripture Creations</a>.
                  </li>
                  <li>Created simple websites for{" "}
                    <a href="https://edefying.com">Edefying</a>,{" "}
                    <a href="https://tdl-construction.soulwells.us">TDL Construction</a>, and{" "}
                    <a href="https://daraluci.weebly.com/">Dara Luci</a>.
                    Used React, Elementor, or Weebly.
                  </li>
                </ul>
              </div>
              <Job title="Participant, IBM Hackathon"
                   meta="Feb. 2026"
                   descriptions={["Introduced to creating a workforce of agentic AI using watsonx Orchestrate. AI Pipeline designed to update Python or JS code projects to latest compatible dependencies."]} />
              <Job title="Web Dev Intern, Degasolutions LLC"
                   meta="June 2025 – Dec. 2025"
                   descriptions={["Developed 90% of UI for a cross-platform mobile application using C#, MAUI, and MudBlazor."]} />
              <Job title="AI Tester, Outlier"
                   meta="Oct. 2023 – Aug. 2024"
                   descriptions={["Authored coding prompts and solutions to train AI models."]} />
              <Job title="Additional Experience"
                   meta="Feb. 2021 – Nov. 2024"
                   descriptions={["Delivery Driver, FedEx – Performed faster than 90% of workforce.", "Cold Call Agent, Credit.com – “Agent of the Week” Award", "Eagle Scout Award: Oct. 2019."]}/>
            </section>
          </div>
          
          {/* <!-- Right Column --> */}
          <div>
            <section className="skills">
              <h2>Skillset Overview</h2>
              <p><strong>Languages:</strong> Java, Python, C#, C++, JS, Dart, SQL, HTML, CSS, and Kotlin.</p>
              <p><strong>Frameworks & Tools:</strong> REST APIs, HTTP, Docker, React, Flutter, .NET, GitHub, WordPress, Nginx, AWS Lambda, VS, VS Code, Android Studio, and AWS API Gateway.</p>
              <p><strong>Skills:</strong> Leadership, independence, algorithmic problem-solving, debugging, and optimizing time-use and code.</p>
            </section>
            
            <section>
              <h2>Personal Projects</h2>
              <ul>
                <Project name="Custom Text Art Game Engine" link="https://github.com/VellStraggler/text-game-engine"
                    description="Use of OOP principles, file I/O, UX design, built-in map chunking, collision detection, etc. 3,000 lines of Python running at 1,000 FPS."/>
                <Project name="Minecraft AI Bot" link="https://github.com/VellStraggler/MinecraftBot"
                    description="Automates gameplay using video input. Written in Java and prototyped in Python with image-to-text processing."/>
                <Project name="3D Voxel Simulation" link="https://www.youtube.com/watch?v=TpZ2NpVWoKY"
                    description="Python with TKinter, asynchronous input, and algorithmic texturing"/>
                <Project name="MIDI Piano Live Visualizer" link="https://github.com/VellStraggler/midi-art"
                    description="Real-time MIDI-input painter written in 10 hours."/>
              </ul>
            </section>
          </div>
        </div>
      </div>
  );
}

// Mount to DOM
ReactDOM.createRoot(document.getElementById("root"))
    .render(<ResumeRaw />);