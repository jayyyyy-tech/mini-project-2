import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import "../components/Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function changePage(path) {
    setShow(false);
    navigate(path);
  }

  return (
    <>
      <Navbar expand="lg" className="NavBar" fixed="top">
        <Container className="navBar">
          <Navbar.Brand className="logos" href="#home">
            BOOOKS
          </Navbar.Brand>
          <Navbar.Toggle
            className="d-block d-md-none"
            onClick={() => setShow(true)}
          />
          <Nav className="navitext d-none d-md-flex gap-2 flex-row">
            {routes
              .filter((route) => route.forNavbar)
              .map((route, index) => {
                return (
                  <Nav.Link key={index} as={Link} to={route.path}>
                    {route.name}
                  </Nav.Link>
                );
              })}
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        placement="end"
        onHide={() => setShow(false)}
        data-bs-theme="dark"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BOOOKS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {routes
              .filter((route) => route.forNavbar)
              .map((route, index) => {
                return (
                  <Nav.Link key={index} onClick={() => changePage(route.path)}>
                    {route.name}
                  </Nav.Link>
                );
              })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
