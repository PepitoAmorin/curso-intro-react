import React from 'react'; 
import { BotonCrearTarea } from "../BotonCrearTarea"; 
import { BuscadorDeTareas } from "../BuscadorDeTareas";
import { ContadorDeTareas } from "../ContadorDeTareas"; 
import { ListaDeTareas } from "../ListaDeTareas"; 
import { Tarea } from "../Tarea"; 

function UI({
  totalDeTareas,
  tareasCompletadas,
  busqueda,
  setBusqueda,
  busquedaDeTareas,
  completarTarea,
  borrarTarea,
}) {
  return (
    <>
      <ContadorDeTareas 
        totalDeTareas={totalDeTareas} 
        tareasCompletadas={tareasCompletadas}
      />
      <BuscadorDeTareas 
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <ListaDeTareas>
        {busquedaDeTareas.map(tarea => (
        <Tarea 
          key={tarea.id} 
          id={tarea.id} 
          text={tarea.texto} 
          hecha={tarea.hecha} 
          completar={() => completarTarea(tarea.id)} 
          borrar={() => borrarTarea(tarea.id)}
          />))}
      </ListaDeTareas>
      <BotonCrearTarea />
    </>
  )
} 

export { UI }; 

