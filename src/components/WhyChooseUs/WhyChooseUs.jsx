import "./WhyChooseUs.css";
import {
  FaBook,
  FaUsers,
  FaCode,
  FaComments,
  FaUniversity,
  FaGraduationCap,
  FaCogs,
  FaCommentDots,
} from "react-icons/fa";
import faqImg from "../../assets/images/faq.png";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-booksbuddy">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="section-heading">Why Choose BooksBuddy?</h2>
            <p className="section-subheading">
              Unlock a world of opportunities for your academic journey.
            </p>

            <ul className="feature-list">
              <li>
                <FaBook
                  style={{
                    fontSize: "24px",
                    marginRight: "10px",
                    color: "#ff2323",
                  }}
                />
                <strong>Free Access</strong> to a vast library of study
                materials.
              </li>
              <li>
                <FaUsers
                  style={{
                    fontSize: "24px",
                    marginRight: "10px",
                    color: "#ff2323",
                  }}
                />
                Collaborate with students, seniors, and teachers for valuable
                insights.
              </li>
              <li>
                <FaCode
                  style={{
                    fontSize: "24px",
                    marginRight: "10px",
                    color: "#ff2323",
                  }}
                />
                Specialized resources for <strong>Coding</strong>,
                <strong>Semester</strong>, <strong>GATE Preparation</strong>,
                and <strong>Placement Preparation</strong>.
              </li>
              <li>
                <FaComments
                  style={{
                    fontSize: "24px",
                    marginRight: "10px",
                    color: "#ff2323",
                  }}
                />
                Join our community to <strong>communicate</strong> with fellow
                learners.
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <div className="icon-section">
              <FaUniversity
                style={{ fontSize: "36px", margin: "20px", color: "#ff2323" }}
              />
              <FaGraduationCap
                style={{ fontSize: "36px", margin: "20px", color: "#ff2323" }}
              />
              <FaCogs
                style={{ fontSize: "36px", margin: "20px", color: "#ff2323" }}
              />
              <FaUsers
                style={{ fontSize: "36px", margin: "20px", color: "#ff2323" }}
              />
              <FaCommentDots
                style={{ fontSize: "36px", margin: "20px", color: "#ff2323" }}
              />
            </div>
            <img src={faqImg} alt="" className="pic-choose" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
