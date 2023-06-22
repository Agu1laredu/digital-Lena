import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

function BasicExample() {
  return (
    <div className="ConteinerNav">
      <Navbar.Brand href="#home" className="Logo">
        <img src={Logo} alt="logo" width="100px" height="100px" />
      </Navbar.Brand>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#home"
              >
                <Link id="links" style={{ textDecoration: "none" }} to={"/"}>
                  {" "}
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#link"
              >
                <Link
                  id="links"
                  style={{ textDecoration: "none" }}
                  to={"/SobreMi"}
                >
                  {" "}
                  SOBRE MÍ
                </Link>
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#link"
              >
                <Link
                  id="links"
                  style={{ textDecoration: "none" }}
                  to={"/TipsGratis"}
                >
                  {" "}
                  TIPS GRATIS
                </Link>
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#link"
              >
                <Link
                  id="links"
                  style={{ textDecoration: "none" }}
                  to={"/Servicios"}
                >
                  {" "}
                  SERVICIOS
                </Link>
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#link"
              >
                <Link
                  id="links"
                  style={{ textDecoration: "none" }}
                  to={"/Proyectos"}
                >
                  {" "}
                  PROYECTOS
                </Link>
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#link"
              >
                <Link
                  id="links"
                  style={{ textDecoration: "none" }}
                  to={"/Certificaciones"}
                >
                  {" "}
                  CERTIFICACIONES
                </Link>
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{
                  fontSize: "20px",
                  fontFamily: "Adlery Blockletter",
                }}
                href="#link"
              >
                <Link
                  id="links"
                  style={{ textDecoration: "none" }}
                  to={"/Contacto"}
                >
                  {" "}
                  CONTACTO
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
