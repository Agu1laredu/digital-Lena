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
    </>
  );
}

export default App;
