function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">


        <figure className="avatar-box">
          <img src="/assets/images/Profile.jpeg" alt="Pritty Biswas" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Pritty Biswas">Pritty Biswas</h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        {/* <div className="separator"></div> */}

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email :</p>

              <a href="mailto:richard@example.com" className="contact-link">iprittybiswas090@ <br /> gmail.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone : </p>

              <a href="#" className="contact-link">(+880)1770590536 <br />(What's up Only)</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday :</p>

              <time dateTime="2004-12-19">19 December</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location :</p>

              <address>Chowgachha, Jashore, Bangladesh</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://www.linkedin.com/in/pritty-biswas-090/" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.facebook.com/prittybiswas090" className="social-link">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/PrittyBiswas" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/prittybiswas090/" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>



        </ul>

      </div>

    </aside>
  )
}

export default Sidebar
