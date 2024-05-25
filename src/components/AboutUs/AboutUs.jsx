import "./AboutUs.css";
import img from "../../assets/images/Exams-pana.png";

const AboutUs = () => {
  return (
    <div className="wrapper">
      <div className="background-container">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img src={img} alt="..." />
        </div>

        <div className="text-container">
          <h1>About us</h1>
          <p>
            Are your shelves overflowing with books you have already devoured?
            Looking to discover new reads without breaking the bank? Look no
            further the BooksBuddy is here to connect book lovers and foster a
            vibrant literary community on campus!
            <br />
            Join the BooksBuddy today and let the literary adventures begin!
            Happy reading! 📚✨
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
