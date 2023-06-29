/* eslint-disable react/no-unescaped-entities */
import './App.css'
import NavBar from './components/Menu/navbar'
import Malena from './assets/malena.png'

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
              <a href="" style={{ color: '#e57a9e', textDecoration: 'none' }}>
                Mi Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* // SOBRE MI */}
      <section
        style={{
          width: '100%',
          margin: '20px auto',
          textAlign: 'center',
          display: 'grid',
        }}
      >
        <h2 style={{ color: '#fec0e7', fontSize: '400%', margin: ' 5% auto' }}>
          SOBRE MI
        </h2>
        <b
          style={{
            textAlign: 'center',
            width: '80%',
            margin: 'auto',
            fontSize: '100%',
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
            textAlign: 'center',
            width: '80%',
            margin: 'auto',
            fontSize: '100%',
          }}
        >
          Me apasionan las redes sociuales y la creación de contenido par alas
          mismas , es un mund infinito que me encanta explorar y ser parte de
          este mundo digital con el Marketing
        </b>
        <button
          style={{
            backgroundColor: '#fec0e7',
            fontSize: '100%',
            border: 'none',
            margin: '20px auto',
            width: '200px',
            padding: '15px',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        >
          <a
            href="https://www.instagram.com/digital_lenacm/"
            target="blank"
            style={{ textDecoration: 'none' }}
          >
            <b
              href=""
              style={{
                fontSize: '100%',
                textDecoration: 'none',
                color: '#010101',
              }}
            >
              INSTAGRAM
            </b>
          </a>
        </button>
      </section>

      <div
        className="div"
        style={{ height: '100px', backgroundColor: '#e57a9e' }}
      ></div>

      {/* // PROYECTO */}
      <section
        style={{
          width: '100%',
          margin: '20px auto',
          textAlign: 'center',
          display: 'grid',
        }}
      >
        <h2
          style={{
            color: '#e57a9e',
            fontSize: '25px',
            margin: ' 5% auto',
            fontFamily: 'YAEp0uc4PeA-0',
          }}
          translate="no"
        >
          DIGITAL LENA PROYECTO
        </h2>
        <p
          style={{
            textAlign: 'center',
            width: '80%',
            margin: 'auto',
            fontSize: '100%',
          }}
        >
          <b> ESTA ES TU OPORTUNIDAD</b> ESTOY EN BUSCA DE TALENTOS QUE QUIERAN
          SUMAR A MI PROYECTO <b>"DIGITAL LENA"</b> DE FORMAR UNA{' '}
          <b> AGENCIA DE MARKETING</b>
        </p>
        <h2
          style={{
            color: '#e57a9e',
            fontSize: '25px',
            margin: ' 5% auto',
            fontFamily: 'YAEp0uc4PeA-0',
          }}
        >
          ¿qué busco?
        </h2>
        <b
          style={{
            textAlign: 'center ',
            width: '80%',
            margin: 'auto',
            fontSize: '100%',
          }}
        >
          DISEÑADORES GRAFICOS - EDITOR DE VIDEOS E IMAGENES - COPYWRITER -
          GROWTH MARKETING
        </b>
        <button
          style={{
            backgroundColor: '#e57a9e',
            fontSize: '100%',
            border: 'none',
            margin: '20px auto',
            width: '200px',
            padding: '15px',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        >
          <a
            href="https://www.instagram.com/digital_lenacm/"
            target="blank"
            style={{ textDecoration: 'none' }}
          >
            <b
              href=""
              style={{
                fontSize: '100%',
                textDecoration: 'none',
                color: '#010101',
                fontFamily: 'YAEp0uc4PeA-0',
              }}
            >
              QUIERO FORMAR PARTE
            </b>
          </a>
        </button>
      </section>

      <div
        className="div"
        style={{ height: '100px', backgroundColor: '#e57a9e' }}
      ></div>

      <section className="SectionForm" style={{ height: '100%' }}>
        <div
          className="diUno"
          style={{
            display: 'grid',
            textAlign: 'center',
          }}
        >
          <form
            action="submit"
            style={{
              margin: 'auto',
              width: '70%',
            }}
          >
            <h2
              style={{
                color: '#fec0e7',
                fontSize: '50px',
                margin: ' 5% auto',
                fontFamily: 'YAEp0uc4PeA-0',
              }}
            >
              ¿Tenés alguna duda?
            </h2>
            <p
              style={{
                textAlign: 'center ',
                width: '80%',
                margin: 'auto',
                fontSize: '100%',
              }}
            >
              ¡COMPLETA EL FORMULARIO Y ME VOY A COMUNICAR CON VOS!
            </p>
            <div
              style={{
                display: 'grid',
                textAlign: 'center',
              }}
            >
              <input
                type="text"
                placeholder="Nombre"
                style={{
                  border: ' 2px solid #fec0e7',
                  backgroundColor: '#fec0e7',
                  width: '200px',
                  margin: ' 20px auto',
                }}
              />
            </div>
            <div
              style={{
                display: 'grid',
              }}
            >
              <textarea
                type="email"
                placeholder="E-mail"
                style={{
                  border: ' 2px solid #fec0e7',
                  backgroundColor: '#fec0e7',
                  width: '200px',
                  margin: 'auto',
                }}
              />
            </div>
            <button
              style={{
                border: ' 2px solid #fec0e7',
                backgroundColor: '#fec0e7',
                width: '200px',
                margin: ' 20px auto',
              }}
            >
              <a href="" style={{ textDecoration: 'none', color: 'black' }}>
                <b>ENVIAR</b>
              </a>
            </button>
          </form>
        </div>
        <div
          className="diUno"
          style={{
            display: 'grid',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: '#fec0e7',
              fontSize: '50px',
              margin: ' 5% auto',
              fontFamily: 'YAEp0uc4PeA-0',
            }}
          >
            CONTACTO
          </h2>
          <div
            style={{
              margin: 'auto',
            }}
          >
            <button
              style={{
                backgroundColor: '#fec0e7',
                fontSize: '100%',
                border: 'none',
                margin: '20px auto',
                width: '200px',
                padding: '15px',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
            >
              <a
                href="https://www.instagram.com/digital_lenacm/"
                target="blank"
                style={{ textDecoration: 'none' }}
              >
                <b
                  href=""
                  style={{
                    fontSize: '100%',
                    textDecoration: 'none',
                    color: '#010101',
                  }}
                >
                  WHATSAPP
                </b>
              </a>
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#fec0e7',
                fontSize: '100%',
                border: 'none',
                margin: '20px auto',
                width: '200px',
                padding: '15px',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
            >
              <a
                href="https://www.instagram.com/digital_lenacm/"
                target="blank"
                style={{ textDecoration: 'none' }}
              >
                <b
                  href=""
                  style={{
                    fontSize: '100%',
                    textDecoration: 'none',
                    color: '#010101',
                  }}
                >
                  INSTAGRAM
                </b>
              </a>
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#fec0e7',
                fontSize: '100%',
                border: 'none',
                margin: '20px auto',
                width: '200px',
                padding: '15px',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
            >
              <a
                href="https://www.instagram.com/digital_lenacm/"
                target="blank"
                style={{ textDecoration: 'none' }}
              >
                <b
                  href=""
                  style={{
                    fontSize: '100%',
                    textDecoration: 'none',
                    color: '#010101',
                  }}
                >
                  E-MAIL
                </b>
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
