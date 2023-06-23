import "./App.css";
import NavBar from "./components/Menu/navbar";
import Malena from "./assets/malena.png";

function App() {
  return (
    <>
      <NavBar />
      <div className="containerr">
        <div id="rowMalena" className="row">
          <img src={Malena} alt="Malena" />
        </div>
        <div className="rowDos">
          <div className="conteinerRow">
            <p id="hdos">COMMUNUTY MANAGER</p>
            <p id="h2">AUMENTÁ TU ALCANCE EN REDES SOCIALES</p>

            <div id="Button">
              <a href="" style={{ color: "#e57a9e", textDecoration: "none" }}>
                Mi Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        style={{
          width: "90%",
          margin: " 15% auto",
          textAlign: "center",
          display: "grid",
        }}
      >
        <h2 style={{ color: "#fec0e7", fontSize: "60px" }}>SOBRE MI</h2>
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
            margin: " 10% auto",
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
            INSTAGRAM
          </b>
        </button>
      </section>
    </>
  );
}

export default App;
