import "./App.css";
import NavBar from "./components/Menu/navbar";
import Malena from "./assets/malena.png";

function App() {
  return (
    <>
      <NavBar />
      <div className="containerr">
        <div className="row">
          <img id="Malena" src={Malena} alt="Malena" />
        </div>
        <div className="row">
          <p id="hdos">COMUNUTY MANAGER</p>
          <p id="h2">aumenta tu alcance en redes</p>
        </div>
      </div>
    </>
  );
}

export default App;
