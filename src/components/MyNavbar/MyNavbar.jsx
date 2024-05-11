import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const MyNavbar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-dark mb-3 fixed-top fw-bold"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="text-white">
              BooksBuddy : Your Ultimate Study Sidekick
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="text-white bg-white"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-white"
            >
              <Offcanvas.Header closeButton className="bg-dark">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-dark">
                <Nav className="justify-content-end flex-grow-1 pe-3 bg-dark">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="../../pages/about.html">About us</Nav.Link>
                  <Nav.Link href="../../pages/community.html">
                    Community
                  </Nav.Link>

                  <NavDropdown
                    title="Categories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="bg-dark"
                  >
                    <NavDropdown.Item href="../../pages/code_cate.html">
                      Coding
                    </NavDropdown.Item>
                    <NavDropdown.Item href="../../pages/sem.html">
                      Semester-wise Materials
                    </NavDropdown.Item>
                    <NavDropdown.Item href="../../pages/gate.html">
                      GATE Preparation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="../../pages/placement.html">
                      Placement Materials
                    </NavDropdown.Item>
                    <NavDropdown.Item href="../../pages/ebooks.html">
                      Ebooks & Notes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="../../pages/misle.html">
                      Miscellaneous
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="../../pages/contact.html">
                    Contact Us
                  </Nav.Link>
                  <Nav.Link href="../../pages/login.html">Log In</Nav.Link>
                  <Nav.Link href="../../pages/signup.html">Sign Up</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MyNavbar;
