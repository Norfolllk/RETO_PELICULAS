import { useState } from 'react';

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
        color: esFavorita ? 'gold' : 'white'
      }}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      <p>{titulo} {esFavorita ? "⭐" : ""}</p>
    </div>
  );
}

function App() {
  const [peliculas, setPeliculas] = useState([ 
    'Interstellar',
    'El Origen',
    'Oppenheimer',
    'Babylon',
  ]);
  const [nuevaPelicula, setNuevaPelicula] = useState('');

  function agregarPelicula() {
    if (nuevaPelicula.trim() === '') {
      return;
    } else {
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula('');
    }
  }

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>

      <div>
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Nueva película..."
          style={{ padding: '8px' }}
        />
        <button onClick={agregarPelicula}>Agregar</button>
      </div>

      {peliculas.map((pelicula, indice) => (
        <Pelicula key={indice} titulo={pelicula} />
      ))}
    </div>
  );
}

export default App;