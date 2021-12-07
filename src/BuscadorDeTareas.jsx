import React from 'react'; 
import './BuscadorDeTareas.css'

function BuscadorDeTareas({ busqueda, setBusqueda }) {  

  const buscar = (busqueda) => {
  console.log(busqueda.target.value); 
  setBusqueda(busqueda.target.value); 
  }; 

  return (
    <>
      <input 
        className="buscador-tareas" 
        placeholder='buscar tareas...' 
        value={busqueda}
        onChange={buscar}
      ></input>
      <p>{busqueda}</p>
    </>
  )
}

export { BuscadorDeTareas }; 