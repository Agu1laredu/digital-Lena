/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import NavBar from "./components/Menu/navbar";
import Malena from "./assets/malena.png";

function App() {
  return (
    <>
      <NavBar />
      <div className="containerr">
        <div id="rowMalena" className="row">
          <img src={Malena} alt="Malena" className="Malena" />
        </div>
        <div className="rowDos">
          <div className="conteinerRow">
            <h1 id="hdos" translate="no">
              COMMUNITY MANAGER
            </h1>
            <p id="h2">AUMENTÁ TU ALCANCE EN REDES SOCIALES</p>

            <div id="Button">
              <a href="" style={{ color: "#e57a9e", textDecoration: "none" }}>
                Mi Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* // SOBRE MI */}
      <section
        style={{
          width: "100%",
          margin: "20px auto",
          textAlign: "center",
          display: "grid",
        }}
      >
        <h2 style={{ color: "#fec0e7", fontSize: "25px", margin: " 5% auto" }}>
          SOBRE MI
        </h2>
        <b
          style={{
            textAlign: "justify",
            width: "80%",
            margin: "auto",
            fontSize: "100%",
          }}
        >
          Soy Malena Aguilar, COMUNNITY MANAGER certificada en CODERHOUSE,
          extendi mis conocimientos en Platzi con los cursos de Estrategias de
          Marketing en Redes Sociales , aun sigo realizando cursos en esta
          plataforma para poder tener muchos más conocimientos incluso ademas de
          los que tengo
        </b>
        <b
          style={{
            textAlign: "justify",
            width: "80%",
            margin: "auto",
            fontSize: "100%",
          }}
        >
          Me apasionan las redes sociuales y la creación de contenido par alas
          mismas , es un mund infinito que me encanta explorar y ser parte de
          este mundo digital con el Marketing
        </b>
        <button
          style={{
            backgroundColor: "#fec0e7",
            fontSize: "100%",
            border: "none",
            margin: "20px auto",
            width: "200px",
            padding: "15px",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        >
          <a
            href="https://www.instagram.com/digital_lenacm/"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <b
              href=""
              style={{
                fontSize: "100%",
                textDecoration: "none",
                color: "#010101",
              }}
            >
              INSTAGRAM
            </b>
          </a>
        </button>
      </section>

      <div
        className="div"
        style={{ height: "100px", backgroundColor: "#e57a9e" }}
      ></div>

      {/* // PROYECTO */}
      <section
        style={{
          width: "100%",
          margin: "20px auto",
          textAlign: "center",
          display: "grid",
        }}
      >
        <h2
          style={{ color: "#e57a9e", fontSize: "25px", margin: " 5% auto" }}
          translate="no"
        >
          DIGITAL LENA PROYECTO
        </h2>
        <p
          style={{
            textAlign: "center",
            width: "80%",
            margin: "auto",
            fontSize: "100%",
          }}
        >
          <b> ESTA ES TU OPORTUNIDAD</b> ESTOY EN BUSCA DE TALENTOS QUE QUIERAN
          SUMAR A MI PROYECTO <b>"DIGITAL LENA"</b> DE FORMAR UNA{" "}
          <b> AGENCIA DE MARKETING</b>
        </p>
        <h2 style={{ color: "#e57a9e", fontSize: "25px", margin: " 5% auto" }}>
          ¿qué busco?
        </h2>
        <b
          style={{
            textAlign: "center ",
            width: "80%",
            margin: "auto",
            fontSize: "100%",
          }}
        >
          DISEÑADORES GRAFICOS - EDITOR DE VIDEOS E IMAGENES - COPYWRITER -
          GROWTH MARKETING
        </b>
        <button
          style={{
            backgroundColor: "#e57a9e",
            fontSize: "100%",
            border: "none",
            margin: "20px auto",
            width: "200px",
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <b
            href=""
            style={{
              fontSize: "100%",
              textDecoration: "none",
              color: "#010101",
            }}
          >
            QUIERO FORMAR PARTE
          </b>
        </button>
      </section>

      <div
        className="div"
        style={{ height: "100px", backgroundColor: "#e57a9e" }}
      ></div>
    </>
  );
}

export default App;
