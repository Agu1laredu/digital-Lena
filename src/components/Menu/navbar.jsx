import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
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
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#home"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#link"
              >
                SOBRE MÍ
              </Nav.Link>
              <Nav.Link
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#link"
              >
                TIPS GRATIS
              </Nav.Link>
              <Nav.Link
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#link"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#link"
              >
                PROYECTOS
              </Nav.Link>
              <Nav.Link
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#link"
              >
                CERTIFICACIONES
              </Nav.Link>
              <Nav.Link
                className="links"
                style={{ color: "white", fontSize: "20px" }}
                href="#link"
              >
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
