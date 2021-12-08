import React from 'react'; 
import { tareasContext } from '../TareasContext';
import './BuscadorDeTareas.css'

function BuscadorDeTareas() {  
  const { busqueda, setBusqueda } = React.useContext(tareasContext); 

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
    </>
  )
}

export { BuscadorDeTareas }; 