const Misle = () => {
  return (
    <div> <div className="navbar">
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
        <img src="img2 home/C programing.jpeg" alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">C Programing</h2>
        <h3 className="author">by Jogamohan medak And Prath Pratim Gogoi</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          The C Programming Language The book enumerates the concepts related
          to C Programming language, as prescribed by ANSI standard. The book
          elaborates on the basics of procedure oriented programming and the
          fundamentals of writing C codes.
        </p>
        <button type="submit">Download</button>
      </div>
    </div>

    <div className="books">
      <div>
        <img
          src="img2 home/c++ Programing Language.webp"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">C++ Programing</h2>
        <h3 className="author">by Bjarne Stroustrup</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          The definitive book on C++ by the creator of C++, The C++
          Programming Language teaches one of the most widely-used,
          general-purpose programming languages. At an advanced pace this book
          teaches how to work with compilers updated for the new standard.
        </p>
        <button type="submit" id="b1">Download</button>
      </div>
    </div>

    <div className="books">
      <div>
        <img src="img2 home/Java programing.jpg" alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">Java</h2>
        <h3 className="author">by Josh Thompsons</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          The sixth edition of this most trusted book on JAVA for beginners is
          here with some essential updates. Retaining its quintessential style
          of concept explanation with exhaustive programs, solved examples,
          and illustrations, this test takes the journey of understanding JAVA
          to slightly higher level.
        </p>
        <button type="submit" id="b2">Download</button>
      </div>
    </div>

    <div className="books">
      <div>
        <img
          src="img2 home/Python Programming.webp"
          alt=""
          className="book-img"
        />
      </div>
      <div className="descp">
        <h2 className="book-name">Python</h2>
        <h3 className="author">by Preeti Thareja</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          This book is designed to serve as textbook for the students taking
          this subject. It is a book with a difference form other textbooks as
          it lays more emphasis on the conceptual concepts that are supported
          by illustrative examples, plenty of challenging theory and
          programming exercises, to test your knowledge acquired on the
          subject.
        </p>
        <button type="submit" id="b3">Download</button>
      </div>
    </div>
    <div className="books">
      <div>
        <img src="img2 home/javascript.jpg" alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">javascript</h2>
        <h3 className="author">by Charlie Masterson</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          This book demonstrates the capabilities of JavaScript for web
          application development by combining theoretical learning with code
          exercises and fun projects that you can challenge yourself with.
        </p>
        <button type="submit">Download</button>
      </div>
    </div>

    <div className="books">
      <div>
        <img src="img2 home/react.jpg" alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">React</h2>
        <h3 className="author">by Jojo Myoes</h3>
        <h3 className="rating">1.987 rating</h3>
        <p className="info">
          React is one of the leading frameworks to build efficient web user
          interfaces. You use small manageable components to build large-sale,
          data-driven websites without page reloads.
        </p>
        <button type="submit">Download</button>
      </div>
    </div>
  </main>

  <footer>
    <div>
      <img src="./images/logo-main.png" alt="...Logo" />
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

export default Misle