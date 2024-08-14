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
  { date: 'Sábado 27 de julio', time: '10:00 a.m.', sport: 'Judo', event: '18 combates en categorías de -48 kg y -60 kg.', details: 'De ese total, seis combates serán por medalla. Los duelos comienzan desde las 10 a.m. de París (4 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '11:00 a.m.', sport: 'Natación', event: '12 competencias de diversos estilos, tanto femeninas como masculinas.', details: 'Entre esas 12, cuatro eventos por medalla: 400 metros libre masculino, 400 metros libre femenino, 4x100 metros relevo libre femenino, 4x100 metros relevo libre masculino. Los eventos inician de las 11 a.m. de París (5 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '3:00 p.m.', sport: 'Piragüismo en eslalon', event: 'Canoa individual masculina series, 1era. carrera y 2da. carrera; kayak individual femenino series, 1era. carrera y 2da. carrera.', details: 'Las competencias comienzan a las 3 p.m. de París (9 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '9:00 a.m.', sport: 'Remo', event: 'Scull individual masculino series y femenino series.', details: 'Doble scull masculino y femenino series. Cuádruple scull masculino y femenino series. Las competencias comienzan a las 9 a.m. de París (3 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '2:30 p.m.', sport: 'Rugby 7', event: 'Seis partidos clasificatorios masculinos, dos semifinales masculinas, y dos partidos masculinos por medallas.', details: 'Las actividades comienzan a partir de las 2:30 p.m. de París (8:30 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '11:00 a.m.', sport: 'Saltos', event: 'Sincronizados trampolín 3 metros femenino, final por medallas.', details: 'La competencia inicia a las 11 a.m. de París (5 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '12:00 p.m.', sport: 'Skateboarding', event: 'Street masculino, eliminatorias y final por medallas.', details: 'A partir de las 12 p.m. de París (6 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '7:00 p.m.', sport: 'Surf', event: 'Ronda 1 masculina y femenina.', details: 'Desde las 7 p.m. de París (1 p.m. ET).' },
  { date: 'Sábado 27 de julio', time: '11:00 a.m.', sport: 'Tiro con arco', event: 'Ronda clasificatoria individual masculina y femenina.', details: 'Desde las 11 a.m. de París (5 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '9:00 a.m.', sport: 'Tiro deportivo', event: 'Finales de 10 metros aire comprimido, masculino y femenino.', details: 'Las finales comienzan a las 9 a.m. de París (3 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '12:00 p.m.', sport: 'Vela', event: 'Medallas de regata de la clase ILCA 7 y ILCA 6.', details: 'Desde las 12 p.m. de París (6 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '12:00 p.m.', sport: 'Vóley playa', event: 'Partidos de octavos de final, tanto masculinos como femeninos.', details: 'Las actividades inician a las 12 p.m. de París (6 a.m. ET).' },
  { date: 'Sábado 27 de julio', time: '10:00 a.m.', sport: 'Wrestling', event: 'Medallas en lucha libre femenina y lucha grecorromana masculina.', details: 'Desde las 10 a.m. de París (4 a.m. ET).' }
];
// Datos de deportes con imágenes
const sportsData = [
  { name: 'Atletismo', description: 'Competiciones de carreras, saltos y lanzamientos.', image: 'img/3.jpg' },
  { name: 'Natación', description: 'Carreras en diferentes estilos y distancias.', image: 'img/2.jpg' },
  { name: 'Ciclismo', description: 'Carreras en ruta y pista, así como ciclismo de montaña.', image: 'img/4.jpg' },
  { name: 'Gimnasia', description: 'Ejercicios de habilidad en diferentes aparatos.', image: 'img/5.jpg' },
  { name: 'Judo', description: 'Arte marcial basado en técnicas de lucha y agarre.', image: 'img/6.jpg' },
  { name: 'Fútbol', description: 'Partidos de fútbol masculino y femenino.', image: 'img/7.jpg' },
  { name: 'Baloncesto', description: 'Partidos de baloncesto masculino y femenino.', image: 'img/8.jpg' },
  { name: 'Esgrima', description: 'Deporte de combate con espada, sable o florete.', image: 'img/9.jpg' },
  { name: 'Boxeo', description: 'Combates de boxeo en diferentes categorías de peso.', image: 'img/10.jpg' },
  { name: 'Vela', description: 'Competiciones de navegación en diferentes clases de embarcaciones.', image: 'img/11.jpg' },
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
            <li><button onClick={() => handleNavClick('paralympics')} className={activeSection === 'paralympics' ? 'active' : ''}>Juegos Paralímpicos</button></li>
          </ul>
        </nav>
      </header>
      <main>
        {activeSection === 'intro' && (
          <section className="intro">
            <p>
              Los Juegos Olímpicos de París 2024, celebrados entre el 26 de julio y el 11 de agosto, marcaron la tercera vez que París fue sede del evento, coincidiendo con el centenario de los últimos juegos en la ciudad en 1924. La candidatura de París fue confirmada en 2017, cuando Los Ángeles acordó organizar los Juegos de 2028.
            </p>
            <p>
              Estos juegos fueron históricos con varios logros destacados en el ámbito deportivo.
            </p>
          </section>
        )}

        {activeSection === 'history' && (
          <section className="history">
            <h2>Historia</h2>
            <p>
              Los Juegos de la XXXIII Olimpiada, celebrados en París del 26 de julio al 11 de agosto de 2024, marcaron el regreso de la capital francesa a la sede olímpica un siglo después de sus últimos Juegos en 1924. París, que fue elegida en 2017 para albergar los Juegos de 2024, se convirtió en la segunda ciudad, junto con Londres, en recibir los Juegos Olímpicos por tercera vez.
            </p>
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
                    <td>{event.time || '-'}</td>
                    <td>{event.sport || '-'}</td>
                    <td>{event.event}</td>
                    <td>{event.details || '-'}</td>
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

        {activeSection === 'paralympics' && (
          <section className="paralympics">
            <h2>Juegos Paralímpicos París 2024</h2>
            <p>
              Entre el 28 de agosto y el 8 de septiembre de 2024, París acogerá los primeros Juegos Paralímpicos de Verano que se celebran en Francia. Durante 11 días de competición se disputarán 549 eventos con medalla (271 masculinos, 235 femeninos y 43 mixtos) en los 22 deportes que forman parte del programa paralímpico: atletismo, bádminton, baloncesto en silla de ruedas, boccia, ciclismo, esgrima en silla de ruedas, fútbol-5, goalball, judo, halterofilia, hípica, natación, piragüismo, remo, rugby en silla de ruedas, taekwondo, tenis de mesa, tenis en silla de ruedas, tiro con arco, tiro olímpico, triatlón y voleibol sentado.
            </p>
            <p>
              La 17ª edición paralímpica reunirá a 4.400 deportistas con discapacidad física, intelectual, visual y parálisis o lesión cerebral, llegados de 182 países. Aunque la cifra de atletas es la misma que en los Juegos de Tokio, sí habrá importantes modificaciones en el reparto por deportes, con el objetivo de aumentar la participación femenina, proteger a los deportistas con mayor discapacidad y equiparar los cupos en las modalidades por equipos.
            </p>
            <p>
              Los Juegos de París contarán con 17 sedes de competición repartidas sobre todo entre el centro de la ciudad (nueve instalaciones) y la zona de Saint-Dennis, al norte (tres). Las otras cinco se encuentran en la periferia o en localidades cercanas. Algunos monumentos emblemáticos de la capital francesa, como la Torre Eiffel, el Campo de Marte, Los Inválidos o el Palacio de Versalles, serán escenario de pruebas paralímpicas.
            </p>
            <p>
              La ceremonia de inauguración, que se celebrará el día 28 de agosto, tendrá lugar en la céntrica plaza de la Concordia, con las delegaciones nacionales desfilando por los Campos Elíseos. La de clausura, prevista para el 8 de septiembre, será en el Estadio de Francia asignado al atletismo y situado en Saint-Denis. Las otras instalaciones no deportivas serán la Villa Paralímpica, el Centro Principal de Prensa y el Centro Internacional de Radiodifusión, ubicados todos ellos en Saint-Denis, y el hotel de la Familia Paralímpica, en la zona centro.
            </p>
            <p>
              2024 será la primera ocasión en que los Juegos Olímpicos y Paralímpicos compartan emblema. Se trata de una combinación de tres elementos: una medalla de oro, una llama y una representación de Marianne, la figura alegórica de una mujer tocada con un gorro frigio que identifica a la República Francesa. La mascota también será la misma, Phryge, el pequeño gorro frigio que, en su versión paralímpica, utiliza prótesis en una pierna.
            </p>
            <h3>Datos de los Juegos Paralímpicos</h3>
            <ul>
              <li>Días de competición: 11 (del 28 de agosto al 8 de septiembre).</li>
              <li>Países participantes: 182.</li>
              <li>Número de deportistas: 4.400 (2.202 hombres, 1.859 mujeres y 339 plazas indistintas).</li>
              <li>Pruebas con medalla: 549 (271 masculinos, 235 femeninos y 43 mixtos).</li>
              <li>Tipos de discapacidad: física, intelectual, visual, parálisis cerebral y lesión cerebral.</li>
              <li>Número de deportes: 22.</li>
              <li>Deportes nuevos: 0.</li>
              <li>Zonas de competición: Zona de Saint-Denis (3 sedes, incluyendo el Estadio Olímpico), zona de París Centro (9) y sedes periféricas (5).</li>
              <li>Instalaciones deportivas: 17.</li>
              <li>Entradas a la venta: 3,4 millones.</li>
              <li>Periodistas acreditados: 2.200.</li>
              <li>Deportes retransmitidos por TV: 22 (todos).</li>
            </ul>
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
