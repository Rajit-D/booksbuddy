import "./Footer.css";
import logo from "../../assets/images/logo-main.png";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="...Logo" />
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
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <BsTwitterX />
        </a>
        <a href="#">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
