function Resume() {
  return (
    <article className="resume active" data-page="resume">

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <i className="fa-solid fa-user-graduate" width="40px"></i>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title"> SR(Sri Rajeshwara) University</h4>

            <span>2023 — 2027</span>

            <p className="timeline-text">
              Currently I am pursuing my graduation degree ,
              <span className="timeline-item-bold">Bachelor of Technology</span> in Computer Science and Engineering.
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Chowgachha Govt. College</h4>

            <span>2021 — 2022</span>

            <p className="timeline-text">
              I have just complated my intermediate with very good experience.....
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Chowgachha Shahadat Pilot Govt. High School</h4>

            <span>2015 — 2020</span>

            <p className="timeline-text">
              I had spend some of the most beautiful moments of my life and learnd the path of the life from
              here.......
            </p>

          </li>

        </ol>

      </section>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <i className="fa-solid fa-briefcase"></i>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Web Desing</h4>

            <span>2025 — Present</span>

            <p className="timeline-text">
              The most modern and high-quality design made at a professional level. From layouts to color schemes,
              I
              craft beautiful,
              responsive designs optimized for any device and built to convert visitors.
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Web Development</h4>

            <span>2025 — Present</span>

            <p className="timeline-text">
              High-quality development of sites at the professional level.I can create beautiful, fully-customized
              websites optimized for your business and goals.
            </p>

          </li>
          {/* 
          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">App Development</h4>

            <span>2024 — Present</span>

            <p className="timeline-text">
              Need a web app built? I can create customized software tailored to your unique workflows and business
              needs.
            </p>

          </li> */}

        </ol>

      </section>

      <section className="skill">

        <h3 className="h3 skills-title">My skills</h3>

        {/* <ul className="skills-list content-card">


          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Web Development</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Node</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">React</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Java</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }}></div>
            </div>

          </li>

        </ul> */}

        <ul id="all-item">
          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-html5"></i>
            </div>
          </li>

          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
          </li>

          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-js"></i>
            </div>
          </li>

          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-react"></i>
            </div>
          </li>
          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-node"></i>
            </div>
          </li>

          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-solid fa-database"></i>
            </div>
          </li>

          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-github"></i>
            </div>
          </li>

          <li id="skills-item-icon">
            <div id="icon-box">
              <i className="fa-brands fa-java"></i>
            </div>
          </li>
          {/* 
          <li id="skills-item-icon">
            <div id="icon-box">
              <img src="https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg" alt=""
                srcSet="" width="40px" />
            </div>
          </li> */}

          <span>.....</span>
          <button className="form-btn" type="button">
            <a href="https://drive.google.com/file/d/1GtbLHM56t4G3FZVW8fgqbr3wa9Q1qj4e/view?usp=sharing">
              Downlode CV
            </a>
          </button>

        </ul>


      </section>

    </article>
  )
}

export default Resume
