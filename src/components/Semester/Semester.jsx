const Semester = () => {
  return (
    <div><div className="navbar">
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"
          >BooksBuddy : Your Ultimate Study Sidekick</a
        >

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
                  href="index.html"
                  >Home</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/about.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/community.html">Community</a>
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
                    <a className="dropdown-item" href="/pages/code_cate.html"
                      >Coding</a
                    >
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pages/sem.html"
                      >Semester-wise Materials</a
                    >
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pages/gate.html"
                      >GATE Preparation</a
                    >
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pages/placement.html"
                      >Placement Materials</a
                    >
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pages/ebooks.html"
                      >Ebooks & Notes</a
                    >
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pages/misle.html"
                      >Miscellaneous</a
                    >
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/pages/contact.html"
                  >Contact US</a
                >
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/pages/login.html"
                  >Log In</a
                >
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/pages/signup.html"
                  >Sign UP</a
                >
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <main>
    <div className="books">
      <div>
        <img
          src="img2 home/electronic Devices and circuits.jpg"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">Electronic Devices and circuits</h2>
        <h3 className="author">by Robert L. Boylastad</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          Over seven editions, Fundamentals of Electric Circuits has become
          the definitive introductory for students and professors.Renowned for
          its clear and concise presentation of fundamental electrical
          concepts, Fundamentals of Electric Circuits has evolved through
          seven editions to establish itself as the go-to resource for
          students and professors alike.
        </p>
        <button type="submit">
          <a
            href="https://drive.google.com/file/d/10kTb8OZGy8Pp97Kk2myCcX72DQHvC3bs/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>

    <div className="books">
      <div>
        <img
          src="img2 home/Digital System Design.jpeg"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">Digital System Design</h2>
        <h3 className="author">by Ramaswamy Palaniappan</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          This book on Power Electronics is one of the most reputed and
          revered texts for more than three decades. Exemplary writing style,
          precise descriptions and supreme attention to detail in the quality
          of the schematics makes this text one ofthe most sought after and
          inspiring books on Power Electronics.
        </p>
        <button type="submit" id="b1">
          <a
            href="https://drive.google.com/file/d/10UQnGzXigouBWUhwu-ijAWpa6_4M_yRc/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>

    <div className="books">
      <div>
        <img src="img2 home/Signal and System.jpg" alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">Signal and System</h2>
        <h3 className="author">by Benoit Boulet</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          features introductory treatments of the applications of these basic
          methods in such areas as filtering, communication, sampling,
          discrete-time processing of continuous-time signals and feedback.
          Relatively self-contained, the text assumes no prior experience with
          system analysis, convolution, Fourier analysis or Laplace and
          z-transforms.
        </p>
        <button type="submit" id="b2">
          <a
            href="https://drive.google.com/file/d/1yr8zMrlpNeSpAUgP0coE7j_FoPLWbhAh/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>

    <div className="books">
      <div>
        <img src="img2 home/Network theory.jpg" alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">Network Theory</h2>
        <h3 className="author">by Made Easy Publications</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          The field of Electrical and Electronic Engineering is vast and
          diverse. However, two topics hold the key to the entire field. They
          are &lsquo;Circuit Theory&lsquo; or Network Theory.These foundational pillars,
          Circuit Theory and Network Theory, serve as the cornerstone of
          Electrical and Electronic Engineering, providing the essential
          framework for understanding and analyzing complex systems.
        </p>
        <button type="submit" id="b3">
          <a
            href="https://drive.google.com/file/d/1uroqIDVPMd7pmXUPEuVsXS43l9gP-UaN/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>

    <div className="books">
      <div>
        <img
          src="img2 home/Analog Communication.webp"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">Analog Communication</h2>
        <h3 className="author">by V.Chandra Sekar</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          The book gives a unified treatment of theoretical and practical
          aspects of digital and analog communication systems, with emphasis
          on digital communication systems.
        </p>
        <button type="submit">
          <a
            href="https://drive.google.com/file/d/1sZydhLcYTD9KpwzcB881t5_L89PbrXuz/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>

    <div className="books">
      <div>
        <img
          src="img2 home/Microprocessors and Microcontrollers.jpg"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">Microprocessors and Microcontrollers</h2>
        <h3 className="author">by Sunil Mathur</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          Unit I : 8085 Processor Unit II : Programming of 8085 Processor Unit
          III : 8051 Micro-controller Unit IV : Peripheral Interfacing Unit V
          : Micro-controller Programming and Applications
        </p>
        <button type="submit">
          <a
            href="https://drive.google.com/file/d/1Pi4Xwuo3w6PuTKaFshYwAFwfLIXH8b1B/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>

    <div className="books">
      <div>
        <img
          src="img2 home/electromagnetic-field-waves-and-transmission-lines-original-imagck7q5hgzhaea.webp"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">
          Electromagnetic field waves and Transmission-lines-
        </h2>
        <h3 className="author">by Mr. K.Mallikarjuna Lingam</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          Electromagnetic Waves & Transmission Lines This systematic and
          well-written book provides an in-depth analysis of all the major
          areas of the subject such as fields, waves and lines.
        </p>
        <button type="submit">
          <a
            href="https://drive.google.com/file/d/1hyveYA9RWqK5ZBRJqbTawMjomOg36Ehg/view?usp=drive_link"
            className="d-btn"
            >Download</a
          >
        </button>
      </div>
    </div>
  </main>

  <footer>
    <div>
      <img src="/images/logo-main.png" alt="...Logo" />
      <p>Contact: <a href="tel:+918250526502">+91 8250526502</a></p>
      <p>
        <a href="mailto:support@booksbuddy.com">support@booksbuddy.com</a>
      </p>
    </div>

    <div>
      <h4>Useful Links</h4>
      <ul>
        <li><a href="#">Refer a Friend</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>

    <div>
      <h4>Policies</h4>
      <ul>
        <li><a href="#">Return Policy</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>

    <div>
      <h4>Helpful Information</h4>
      <ul>
        <li><a href="#">FAQ</a></li>
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
  </div></div>
  )
}

export default Semester