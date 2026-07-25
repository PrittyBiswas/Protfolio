function Portfolio() {
  return (
    <article className="portfolio active" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">

        <div className="filter-select-box">

          <button className="filter-select" data-select>

            <div className="select-value" data-selecct-value>Select category</div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>

          </button>

          <ul className="select-list">

            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>

          </ul>

        </div>

        <ul className="project-list">

          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src="/assets/images/ProjectImg/ManageMentSystem.png" alt="finance"
                  loading="lazy" />
              </figure>

              <h3 className="project-title"> <a href="https://assetverse-client-three.vercel.app/">
                Preview </a></h3>

              <p className="project-category">Management System</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web design">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src="/assets/images/ProjectImg/Hero_io.png" alt="fundo" loading="lazy" />
              </figure>

              <h3 className="project-title"> <a href="https://madehero-io.netlify.app/"> Preview </a></h3>
              <p className="project-category">Hreo-IO</p>

            </a>
          </li>


          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src="/assets/images/ProjectImg/Green Earth.png" alt="summary" loading="lazy" />
              </figure>

              <h3 className="project-title"> <a href="https://greenearthi.netlify.app/"> Preview </a></h3>
              <p className="project-category">Greem Erath </p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="applications">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src="/assets/images/ProjectImg/ToyStore.png" alt="task manager"
                  loading="lazy" />
              </figure>

              <h3 className="project-title"> <a href="https://kdstoystore.netlify.app/"> Preview </a></h3>
              <p className="project-category">Toy-Store </p>

            </a>
          </li>

          {/* <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="https://www.reuters.com/resizer/v2/YSNVNSPPD5KLNGTDJPX7KTH62E.jpg?auth=2190ae36d0a6816d83ce22bdb0627c13bbbcda0e3f4421a61e3222a78270fbee&width=720&quality=80"
                    alt="arrival" loading="lazy" />
                </figure>

                <h3 className="project-title">E-Commerce(Amazon Clone)</h3>

                <p className="project-category">Web development</p>

              </a>
            </li> */}


          {/* <li className="project-item  active" data-filter-item data-category="applications">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/assets/images/project-10.webp" alt="task manager" loading="lazy" />
                </figure>

                <h3 className="project-title">Calculator</h3>

                <p className="project-category">Applications</p>

              </a>
            </li> */}


          {/* <li className="project-item  active" data-filter-item data-category="applications">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/assets/images/project-11.png" alt="task manager" loading="lazy" />
                </figure>

                <h3 className="project-title">spotify</h3>

                <p className="project-category">Applications</p>

              </a>
            </li> */}

          {/* <li className="project-item  active" data-filter-item data-category="applications">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/assets/images/project-13.jpg" alt="task manager" loading="lazy"
                    className="projest-12" />
                </figure>

                <h3 className="project-title">Calander</h3>

                <p className="project-category">Applications</p>

              </a>
            </li> */}



        </ul>

      </section>

    </article>
  )
}

export default Portfolio
