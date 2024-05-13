import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { BE_URL } from "../../utils/constants";
import { useSetRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import authScreenAtom from "../../atoms/authAtom";

const SignupForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const setUser = useSetRecoilState(userAtom);
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/api/v1/students/signup",
      inputs,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(response);
    localStorage.setItem("user-threads", JSON.stringify(response.data.student));
    setUser(response.data.student);
    if (response.status === 200) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="signup form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign up for an account
                      </h5>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setInputs({ ...inputs, username: e.target.value });
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Name
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setInputs({ ...inputs, email: e.target.value });
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setInputs({ ...inputs, password: e.target.value });
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleClick}
                        >
                          Sign up
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Already have an account?{" "}
                        <Link
                          style={{ color: "#393f81" }}
                          onClick={(e) => {
                            e.preventDefault();
                            setAuthScreen("login");
                          }}
                        >
                          Log in here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
