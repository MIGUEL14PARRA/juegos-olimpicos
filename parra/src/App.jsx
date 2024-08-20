import { useState } from 'react';
import './App.css';

// Datos de resultados con imágenes de banderas
const results = [
  { country: 'Estados Unidos', points: 113, flag: 'img/1.jpg' },
  { country: 'China', points: 92, flag: 'img/3.png' },
  { country: 'Japón', points: 58, flag: 'img/4.png' },
  { country: 'Alemania', points: 51, flag: 'img/5.png' },
  { country: 'Francia', points: 45, flag: 'img/6.png' },
  { country: 'Australia', points: 40, flag: 'img/7.png' },
  { country: 'Canadá', points: 35, flag: 'img/8.png' },
  { country: 'Reino Unido', points: 32, flag: 'img/9.png' },
  { country: 'Brasil', points: 27, flag: 'img/10.png' },
  { country: 'Italia', points: 25, flag: 'img/11.png' }
];

// Datos del calendario con eventos detallados
const calendarEvents = [
  { date: 'Miércoles 24 de julio', time: '3:00 p.m.', sport: 'Fútbol', event: 'Ocho partidos de fase de grupos del fútbol masculino.', details: 'El primer partido comienza a las 3 p.m. hora de París (9 a.m. ET).' },
  { date: 'Miércoles 24 de julio', time: '3:30 p.m.', sport: 'Rugby 7', event: 'Se llevarán a cabo 12 partidos de la fase preliminar.', details: 'El primer partido inicia a las 3:30 p.m. de París (9:30 a.m. ET).' },
  { date: 'Jueves 25 de julio', time: '9:00 a.m.', sport: 'Balonmano', event: 'Seis partidos femeninos de la ronda preliminar de fase de grupos.', details: 'El primer partido comienza a las 9 a.m. de París (3 a.m. ET).' },
  { date: 'Jueves 25 de julio', time: '5:00 p.m.', sport: 'Fútbol', event: 'Seis partidos de fútbol femenino de la fase de grupos.', details: 'El primer duelo comienza a las 5 p.m. de París (11 a.m. ET).' },
  { date: 'Jueves 25 de julio', time: '2:00 p.m.', sport: 'Rugby 7', event: 'Seis partidos de fase preliminar.', details: 'Dos clasificatorios masculinos, cuatro partidos de cuartos de final masculinos. Las actividades aquí comienzan a las 2 p.m. de París (8 a.m. ET).' },
  { date: 'Jueves 25 de julio', time: '9:30 a.m.', sport: 'Tiro con arco', event: 'Ronda clasificatoria individual femenina y masculina.', details: 'Las actividades inician a las 9:30 a.m. de París (3:30 a.m. ET).' },
  { date: 'Viernes 26 de julio', time: '8:00 p.m.', sport: 'Ceremonia de inauguración', event: 'Ceremonia de inauguración.', details: '' },
  { date: 'Sábado 27 de julio', time: '8:30 a.m.', sport: 'Bádminton', event: '36 partidos de fase de grupos de todas las categorías.', details: 'Las actividades comienzan a las 8:30 a.m. de París (2:30 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '11:00 a.m.', sport: 'Baloncesto', event: 'Cuatro partidos masculinos de fase de grupos.', details: 'Los duelos inician desde las 11 a.m. de París (5 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '9:00 a.m.', sport: 'Balonmano', event: 'Seis partidos masculinos de la ronda preliminar de fase de grupos.', details: 'Los encuentros comienzan a las 9 a.m. de París (3 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '3:30 p.m.', sport: 'Boxeo', event: 'Cuatro combates masculinos y cuatro femeninos de dieciseisavos de final.', details: 'El primer combate inicia a las 3:30 p.m. de París (9:30 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '2:30 p.m.', sport: 'Ciclismo en ruta', event: 'Contrarrelojes individuales masculina y femenina.', details: 'Ambas son competencias por medallas. Las actividades comienzan a las 2:30 p.m. de París (8:30 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '10:00 a.m.', sport: 'Esgrima', event: 'Combates de espada individual femenina y sable individual masculino.', details: 'Las actividades inician desde las 10 a.m. de París (4 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '11:00 a.m.', sport: 'Gimnasia artística', event: 'Tres clasificatorios masculinos.', details: 'Los eventos inician a partir de las 11 a.m. de París (5 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '9:30 a.m.', sport: 'Hípica', event: 'Concurso completo, doma por equipos y concurso completo, doma individual.', details: 'Las actividades comienzan a las 9:30 a.m. de París (3:30 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '10:00 a.m.', sport: 'Hockey sobre césped', event: 'Seis partidos masculinos y dos femeninos de fase de grupos.', details: 'Los partidos inician desde las 10 a.m. de París (4 a.m. ET).' },
];
// Datos de deportes con imágenes y enlaces
const sportsData = [
  { name: 'Atletismo', description: 'Competiciones de carreras, saltos y lanzamientos.', image: 'img/3.jpg', link: 'https://concepto.de/atletismo/' },
  { name: 'Natación', description: 'Carreras en diferentes estilos y distancias.', image: 'img/2.jpg', link: 'https://concepto.de/natacion' },
  { name: 'Ciclismo', description: 'Carreras en ruta y pista, así como ciclismo de montaña.', image: 'img/4.jpg', link: 'https://www.claro.com.co/institucional/historia-del-ciclismo/' },
  { name: 'Gimnasia', description: 'Ejercicios de habilidad en diferentes aparatos.', image: 'img/5.jpg', link: 'https://concepto.de/gimnasia' },
  { name: 'Judo', description: 'Arte marcial basado en técnicas de lucha y agarre.', image: 'img/6.jpg', link: 'https://definicion.de/judo/' },
  { name: 'Fútbol', description: 'Partidos de fútbol masculino y femenino.', image: 'img/7.jpg', link: 'https://concepto.de/futbol' },
  { name: 'Baloncesto', description: 'Partidos de baloncesto masculino y femenino.', image: 'img/8.jpg', link: 'https://concepto.de/baloncesto' },
  { name: 'Esgrima', description: 'Deporte de combate con espada, sable o florete.', image: 'img/9.jpg', link: 'https://www.canalcapital.gov.co/eureka/que-la-esgrima-y-cuales-son-sus-reglas' },
  { name: 'Boxeo', description: 'Combates de boxeo en diferentes categorías de peso.', image: 'img/10.jpg', link: 'https://definicion.de/boxeo/' },
  { name: 'Vela', description: 'Competiciones de navegación en diferentes clases de embarcaciones.', image: 'img/11.jpg', link: 'https://www.santiago2023.org/es/deportes/vela.html' },
  // Agrega más deportes según sea necesario
];

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  const handleNavClick = (section) => setActiveSection(section);

  return (
    <div className="app">
      <header className="header">
        <h1>Juegos Olímpicos y Paralímpicos París 2024</h1>
        <nav className="nav">
          <ul>
            <li><button onClick={() => handleNavClick('history')} className={activeSection === 'history' ? 'active' : ''}>Historia</button></li>
            <li><button onClick={() => handleNavClick('sports')} className={activeSection === 'sports' ? 'active' : ''}>Deportes</button></li>
            <li><button onClick={() => handleNavClick('schedule')} className={activeSection === 'schedule' ? 'active' : ''}>Calendario</button></li>
            <li><button onClick={() => handleNavClick('results')} className={activeSection === 'results' ? 'active' : ''}>Resultados</button></li>
          </ul>
        </nav>
      </header>
      <main>
        {activeSection === 'intro' && (
          <section className="intro">
            <p>
              Los Juegos Olímpicos de París 2024, celebrados entre el 26 de julio y el 11 de agosto, marcaron la tercera vez que París fue sede del evento, coincidiendo con el centenario de los últimos juegos en la ciudad en 1924. La candidatura de París fue confirmada en 2017, cuando Los Ángeles acordó organizar los Juegos de 2028.
            </p>
            <img src="img/14.jpg" alt="Descripción de la imagen" className="history-image" />
            <p>
              Estos juegos fueron históricos con varios logros destacados en el ámbito deportivo.
            </p>
          </section>
        )}

        {activeSection === 'history' && (
          <section className="history">
            <h2>Historia</h2>
            <img src="img/13.jpg" alt="Descripción de la imagen" className="history-image" />
            <p>
              Los Juegos de la XXXIII Olimpiada, celebrados en París del 26 de julio al 11 de agosto de 2024, marcaron el regreso de la capital francesa a la sede olímpica un siglo después de sus últimos Juegos en 1924. París, que fue elegida en 2017 para albergar los Juegos de 2024, se convirtió en la segunda ciudad, junto con Londres, en recibir los Juegos Olímpicos por tercera vez.
            </p>
            <img src="img/12.jpg" alt="Descripción de la imagen" className="history-image" />
            <h3>Entre los destacados del evento:</h3>
            <ul>
              <li>Simone Biles, de EE.UU., ganó tres oros, totalizando siete en su carrera.</li>
              <li>Novak Djokovic, de Serbia, alcanzó el Golden Slam al ganar el oro, completando todos los títulos importantes en su carrera.</li>
              <li>Lisa Carrington, de Nueva Zelanda, logró tres oros, alcanzando ocho en total.</li>
              <li>Armand Duplantis, de Suecia, ganó oro en salto con pértiga y batió el récord mundial con 6.25 metros.</li>
              <li>Sifan Hassan, de Países Bajos, obtuvo tres medallas, incluyendo oro en maratón y bronce en 5000 y 10 000 metros.</li>
              <li>Katie Ledecky, de EE.UU., igualó el récord de medallas de oro de Larisa Latýnina al ganar en 800 m y 1500 m.</li>
              <li>Mijaín López Núñez, de Cuba, ganó oro en lucha libre por quinta vez consecutiva, su última participación olímpica.</li>
              <li>Léon Marchand, de Francia, ganó cuatro oros en natación y un bronce.</li>
            </ul>
          </section>
        )}

        {activeSection === 'sports' && (
          <section className="sports">
            <h2>Deportes</h2>
            <p>
              En los Juegos Olímpicos de París 2024, se disputarán una variedad de deportes, incluyendo:
            </p>
            <div className="sports-list">
              {sportsData.map((sport, index) => (
                <div key={index} className="sport-card">
                  <img src={sport.image} alt={sport.name} className="sport-image" />
                  <h3>{sport.name}</h3>
                  <p>{sport.description}</p>
                  <a href={sport.link} className="btn" target="_blank" rel="noopener noreferrer">Ver Más</a>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'schedule' && (
          <section className="schedule">
            <h2>Calendario</h2>
            <p>
              Los Juegos Olímpicos de París 2024 se celebrarán del 26 de julio al 11 de agosto. Aquí tienes una tabla con los eventos importantes:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Deporte</th>
                  <th>Evento</th>
                  <th>Detalles</th>
                </tr>
              </thead>
              <tbody>
                {calendarEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.date}</td>
                    <td>{event.time }</td>
                    <td>{event.sport }</td>
                    <td>{event.event}</td>
                    <td>{event.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        {activeSection === 'results' && (
          <section className="results">
            <h2>Tabla de Resultados</h2>
            <table>
              <thead>
                <tr>
                  <th>País</th>
                  <th>Bandera</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.country}</td>
                    <td><img src={result.flag} alt={`${result.country} flag`} className="flag" /></td>
                    <td>{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        <section className="legacy">
          <p>
            Estos juegos dejaron un legado duradero en la historia olímpica, tanto por los logros deportivos como por la inclusión y diversidad de las naciones participantes........................................................................................................................................................................................................
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Juegos Olímpicos y Paralímpicos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
