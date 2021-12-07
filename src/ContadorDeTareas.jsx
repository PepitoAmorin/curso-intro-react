import React from 'react'; 
import './ContadorDeTareas.css'

function ContadorDeTareas({ totalDeTareas, tareasCompletadas}) { 
  const textoContador = function(totalDeTareas, tareasCompletadas) {
    if (totalDeTareas > tareasCompletadas) {
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
