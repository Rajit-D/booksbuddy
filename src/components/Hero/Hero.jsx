import MyNavbar from "../MyNavbar/MyNavbar.jsx";
import "./Hero.css";
import logo from "../../assets/images/logo-main.png";
import heroImg from "../../assets/images/hero-image.png";
import { ImBooks } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="home-page">
        <MyNavbar />
        <div className="d-flex justify-content-center align-items-center">
          <div className="logo-img">
            <img className="main-logo" src={logo} alt="Logo..." />
          </div>

          <div className="home-container">
            <div className="home-intro">
              <h1 className="main-heading">BooksBuddy</h1>
              <h3 className="sub-heading">
                Empowering Education through Peer-to-Peer Book Exchange and
                Digital Learning Resources!
              </h3>
              <p className="slogan">
                Sail through semesters with Book&nbsp;s Buddy - Connecting
                College Minds, Sharing Knowledge, One Page at a Time!
              </p>
              <div className="buttons">
                <button className="login-btn">
                  <Link to={"/auth"} className="l-btn">
                    Login
                  </Link>
                </button>
                <button className="signup-btn">
                  <Link to={"/auth"} className="l-btn">
                    Sign Up
                  </Link>
                </button>
              </div>
            </div>

            <div className="intro-pic">
              <img className="home-intro-pic" src={heroImg} alt="homelogo" />
            </div>
          </div>
        </div>
      </div>
      <section className="welcome-icon">
        <div className="container-welcome">
          <div className="row">
            <div className="services-block-one col-lg-4 col-md-6">
              <div className="inner-box hvr-float-shadow">
                <span className="icon-wel">
                  <ImBooks />
                </span>
                <h4>Find Old Books & Ebooks</h4>
                <div className="text-welcome">
                  Connect with seniors to get the books you need and share your
                  knowledge by giving back.
                </div>
              </div>
            </div>
            <div className="services-block-one col-lg-4 col-md-6">
              <div className="inner-box hvr-float-shadow">
                <span className="icon-wel">
                  <FaHeart />
                </span>
                <h4>Easy Sharing</h4>
                <div className="text-welcome">
                  Share the joy of learning with our user-friendly platform,
                  making book exchanges simple and efficient.
                </div>
              </div>
            </div>
            <div className="services-block-one col-lg-4 col-md-6">
              <div className="inner-box hvr-float-shadow">
                <span className="icon-wel">
                  <FaHandshakeAngle />
                </span>
                <h4>Help Fellow Students</h4>
                <div className="text">
                  Extend a helping hand to your peers by providing access to
                  valuable resources and supporting academic success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
