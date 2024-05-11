import "./Categories.css";
import codingImg from "../../assets/images/coding.avif";
import eBooksImg from "../../assets/images/ebooks.avif";
import gateImg from "../../assets/images/gate.jpg";
import misleImg from "../../assets/images/misle.jpg";
import placementImg from "../../assets/images/placement.jpg";
import semImg from "../../assets/images/sem.avif";

const Categories = () => {
  return (
    <section id="categories">
      <div className="books-category">
        <h2 className="categories-heading">Categories</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={codingImg}
                className="card-img-top"
                alt="Coding Image"
              />
              <div className="card-body">
                <h5 className="card-title">Coding</h5>
                <p className="card-text">
                  Explore coding challenges, algorithms, and programming
                  languages.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={semImg}
                className="card-img-top"
                alt="Semester-wise Image"
              />
              <div className="card-body">
                <h5 className="card-title">Semester-wise Materials</h5>
                <p className="card-text">
                  Access study materials organized by semester for your courses.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={gateImg}
                className="card-img-top"
                alt="GATE Preparation Image"
              />
              <div className="card-body">
                <h5 className="card-title">GATE Preparation</h5>
                <p className="card-text">
                  Get ready for GATE exams with specialized materials for your
                  field.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={placementImg}
                className="card-img-top"
                alt="Placement Materials Image"
              />
              <div className="card-body">
                <h5 className="card-title">Placement Materials</h5>
                <p className="card-text">
                  Prepare for interviews, build resumes, and succeed in
                  placement exams.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={eBooksImg}
                className="card-img-top"
                alt="Ebooks & Notes Image"
              />
              <div className="card-body">
                <h5 className="card-title">Ebooks & Notes</h5>
                <p className="card-text">
                  Access a collection of general ebooks, subject-specific notes,
                  and reference materials.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={misleImg}
                className="card-img-top"
                alt="Miscellaneous Image"
              />
              <div className="card-body">
                <h5 className="card-title">Miscellaneous</h5>
                <p className="card-text">
                  Explore study tips, learning resources, and college survival
                  guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
