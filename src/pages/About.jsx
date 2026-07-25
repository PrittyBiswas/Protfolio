function About() {
  return (
    <article className="about active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm an accomplished developer with mastery in web development and print media.
          I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way.....
        </p>
      </section>


      {/* service */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          <li className="service-item">

            <div className="service-icon-box">
              <i className="fa-solid fa-compass-drafting" id="service-icon" width="40"></i>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional level. From layouts to color schemes, I
                craft beautiful,
                responsive designs optimized for any device and built to convert visitors.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <i className="fa-solid fa-code" id="service-icon" width="40"></i>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.I can create beautiful, fully-customized
                websites optimized for your business and goals.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <i className="fa-solid fa-mobile-screen-button" id="service-icon" width="40"></i>
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Need a web app built? I can create customized software tailored to your unique workflows and business
                needs.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <i className="fa-solid fa-shop" id="service-icon" width="40"></i>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">E-commerce</h4>

              <p className="service-item-text">
                I build secure, scalable online stores integrated with popular ecommerce platforms and payment
                gateways.
              </p>
            </div>

          </li>

        </ul>

      </section>

    </article>
  )
}

export default About
