import React from 'react'; 
import { tareasContext } from '../TareasContext';
import './ContadorDeTareas.css'; 


function ContadorDeTareas() { 
  const { totalDeTareas, tareasCompletadas} = React.useContext(tareasContext); 

  const textoContador = function(totalDeTareas, tareasCompletadas) {
    if (totalDeTareas === 0) {
      return `Todavía no tenés tareas.`
    } else if (totalDeTareas > tareasCompletadas) {
      return `Has completado ${tareasCompletadas} de ${totalDeTareas} tareas!`
    } else {
      return `Has completado TODAS las tareas!`
    }
  }

  return (
      <h2 className="contador-tareas">{textoContador(totalDeTareas, tareasCompletadas)}</h2>
      )
} 

export { ContadorDeTareas }; 
