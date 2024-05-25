import "./Community.css"

const Community = () => {
  return (
    <div>
      <section id="comm-land">
        <div className="navbar">
          <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#home">
                BooksBuddy : Your Ultimate Study Sidekick
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end text-bg-dark"
                tabIndex="-1"
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                    BooksBuddy
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Community
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Categories
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            Coding
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester-wise Materials
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            GATE Preparation
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Placement Materials
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ebooks & Notes
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Miscellaneous
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="contact.html"
                      >
                        Contact US
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Log In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Sign UP
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex mt-3" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="com-intro">
          <h1 className="com-heading">BooksBuddy</h1>
          <h2 className="sub-head">Join Now BooksBuddy Community</h2>
          <p className="com-p">
            Connect with your peers, share knowledge, and enhance your learning
            experience at Haldia Institute of Technology.
          </p>
          <a href="https://t.me/+ttGi3jmJHupmYWY1" className="telegram-button">
            Join Now
          </a>
        </div>
        {/* <div className="compic">
        <img src="/images/Education-pana.png" alt="" className="com-img" />
      </div> */}
      </section>

      <section className="benefits-section">
        <h2>Benefits of Joining</h2>

        <div className="benefit">
          <i className="fas fa-book benefit-icon"></i>
          <p>
            Book Swapping: Access a variety of textbooks and study materials by
            swapping books with your peers.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-users benefit-icon"></i>
          <p>
            Connect with Seniors: Gain valuable insights and guidance from
            experienced seniors who have excelled in their studies.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-graduation-cap benefit-icon"></i>
          <p>
            Peer Learning: Collaborate with classmates and batchmates for group
            studies and project collaborations.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-book-open benefit-icon"></i>
          <p>
            Ebook Library: Access a curated collection of ebooks to enhance your
            learning experience.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-info-circle benefit-icon"></i>
          <p>
            Stay Informed: Receive updates and important information directly
            through our community.
          </p>
        </div>
      </section>

      <section className="gradient-card">
        <h2 className="join-heading">Join Our Community on Telegram</h2>
        <a href="https://t.me/+ttGi3jmJHupmYWY1" className="telegram-button">
          Join Now
        </a>
      </section>

      <footer>
        <div>
          <img src="/images/logo-main.png" alt="...Logo" />
          <p>
            Contact: <a href="tel:+918250526502">+91 8250526502</a>
          </p>
          <p>
            <a href="mailto:support@booksbuddy.com">support@booksbuddy.com</a>
          </p>
        </div>

        <div>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Refer a Friend</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Policies</h4>
          <ul>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Helpful Information</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href="#" className="fab fa-facebook"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
      </footer>
      <div className="Copyright">
        <p>Copyright © 2023 BooksBuddy. All rights reserved.</p>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Community;
