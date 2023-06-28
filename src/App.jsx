/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";
import NavBar from "./components/Menu/navbar";
import Malena from "./assets/malena.png";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log("Datos enviados:", { nombre, email, mensaje });
    // Luego de enviar los datos, puedes limpiar los campos
    setNombre("");
    setEmail("");
    setMensaje("");
  };
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

      <div className="containerr">
        <div id="rowConteiner">
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              height: "20%",
            }}
          >
            <h2 id="duda">¿TENÉS ALGUNA DUDA?</h2>
            <p id="p">
              ¡COMPLETÁ ESTE FORMULARIO Y ME VOY A CONTACTAR CON VOS!
            </p>
            <div className="ContenedorInput">
              <label htmlFor="nombre">Nombre:</label>
              <input
                style={{
                  backgroundColor: "#fec0e7",
                  border: "none",
                  marginTop: "15px",
                }}
                type="text"
                id="nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div className="ContenedorInput">
              <label htmlFor="email">Email:</label>
              <input
                style={{
                  backgroundColor: "#fec0e7",
                  border: "none",
                  marginTop: "15px",
                }}
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div
              className=""
              style={{
                backgroundColor: "#fec0e7",
                border: "none",
                height: "200px",
                margin: " 15px auto",
                width: "300px",
              }}
            >
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                style={{
                  backgroundColor: "#fec0e7",
                  border: "none",
                  width: "300px",
                  marginTop: "15px",
                }}
                id="mensaje"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
              />
            </div>
            <div id="ButtonRedes">
              <button
                style={{
                  margin: "auto",
                  backgroundColor: "#fec0e7",
                  border: "none",
                  width: "300px",
                  marginTop: "15px",
                }}
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="rowDos">
          <div className="conteinerRow">
            <h2 id="hdos" translate="no" style={{ marginTop: "10px" }}>
              CONTACTO
            </h2>

            <div id="ButtonRedes">
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                WHATSAPP
              </a>
            </div>
            <div id="ButtonRedes">
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                INSTAGRAM
              </a>
            </div>
            <div id="ButtonRedes">
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="div"
        style={{
          height: "350px",
          backgroundColor: "#e57a9e",
          marginTop: "100px",
        }}
      ></div>
    </>
  );
}

export default App;
