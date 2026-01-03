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
            <a className="title">{name}<a href={link}>{linkName}</a></a>:{" "}
            {description}
        </li>
    );}

function Resume() {
  return (
    <div className="resume">
        {/* <!-- Header --> */}
        <div className="header">
          <h1>David A. Wells</h1>
          <div className="contact">
            <span>
                <a href="https://maps.app.goo.gl/G8GZF1Nj1rt8tvKXA">Pleasant Grove, UT 84062</a>
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
                Bachelor's Degree in Computer Science · GPA: 3.23
              </div>
              <ul>
                <SchoolProject name="Senior Project –" link="https://www.youtube.com/watch?v=cRJ2EqHhD7Q" linkName="Physics-Based Music Visualizer"
                    description="One-click audio-to-video generator with real-time playback.
                    Written in C++ using GLFW and supporting libraries."/>
                <SchoolProject name="Team Leader – Pie Agenda App"
                    description="Led a team of 8 in building an app for Android/iOS/Windows.
                    Written in Dart using Flutter."/>
                <SchoolProject link="https://github.com/elinorewickard/cse_final_project"
                    linkName="Team Leader – Game: Wall of Fire" description="Led a team of 3 to create a 3D side-scroller in Python.
                    Ranked 1st for best graphics."/>
                <SchoolProject name="Academic Highlight" description="Improved GPA with 20-credit load in final semester."/>
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
                    description="Backend built with AWS and Java; frontend in JS.
                    Focused on stress management and long-term perseverance."/>
              </ul>
            </section>
            
            <section>
              <h2>Experience</h2>
              
              <Job title="Web Developer Intern, Degasolutions LLC"
                   meta="June 2025 – Dec. 2025"
                   descriptions={["Developed 90% of the UI for an Android/Desktop application using C#, MAUI, and MudBlazor."]} />
              <div className="job">
                <div className="job-header">
                  <div className="title">Freelance Full Stack Website Contractor</div>
                  <div className="job-meta">Oct. 2024 – Present</div>
                </div>
                <ul>
                  <li>Created websites for{" "}
                    <a href="https://edefying.com">Edefying</a>,{" "}
                    <a href="https://tdl-construction.soulwells.us">TDL Industrial</a>, and{" "}
                    <a href="https://daraluci.weebly.com/">Dara Luci</a>.
                    Adapted to client-specific tools like Elementor and Weebly. 100% client satisfaction.</li>
                </ul>
              </div>
              <Job title="AI Tester, Outlier"
                   meta="Oct. 2023 – Aug. 2024"
                   descriptions={["Authored coding prompts and solutions to train AI models."]} />
              <Job title="Additional Experience"
                   meta="Feb. 2021 – Nov. 2024"
                   descriptions={["Delivery Driver, FedEx – Performed faster than 90% of workforce.",
                   "Cold Call Agent, Credit.com – “Agent of the Week” Award",
                   "Eagle Scout Award: Oct. 2019."]}/>
            </section>
          </div>
          
          {/* <!-- Right Column --> */}
          <div>
            <section className="skills">
              <h2>Skillset Overview</h2>
              <p><strong>Languages:</strong> Java, Python, C#, C++, JS, Dart, SQL, HTML, CSS, and Kotlin.</p>
              <p><strong>Frameworks & Tools:</strong> REST APIs, HTTP, Docker, React, Flutter, .NET, GitHub, WordPress, Nginx, NiceGUI.</p>
              <p><strong>Skills:</strong> Leadership, independence, algorithmic problem-solving, debugging, and optimizing time-use and code.</p>
            </section>
            
            <section>
              <h2>Personal Projects</h2>
              <ul>
                <Project name="Text Art Game Engine" link="https://github.com/VellStraggler/text-game-engine"
                    description="Use of Linked Lists, Hashmaps, OOP principles, file I/O, UX design, dictionaries, map chunking,
                    collision detection, and more. 2,600 lines of Python running at 1,000 FPS in terminal."/>
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
    .render(<Resume />);