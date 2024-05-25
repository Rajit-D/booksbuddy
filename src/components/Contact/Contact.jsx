import "./Contact.css"

const Contact = () => {
  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="/images/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Lets get in touch</h3>
          <p className="text">
            Connect with us-Your gateway to seamless communication awaits. Lets
            make things happen together.
          </p>

          <div className="info">
            <div className="information">
              <img src="/images/location.png" className="icon" alt="" />
              <p>Haldia Institute of Technology</p>
            </div>
            <div className="information">
              <img src="/images/email.png" className="icon" alt="" />
              <p>reekash026.hitece2020@gmail.com</p>
            </div>
            <div className="information">
              <img src="/images/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
