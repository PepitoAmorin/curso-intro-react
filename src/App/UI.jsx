import React from 'react'; 
import { BotonCrearTarea } from "../BotonCrearTarea"; 
import { BuscadorDeTareas } from "../BuscadorDeTareas";
import { ContadorDeTareas } from "../ContadorDeTareas"; 
import { ListaDeTareas } from "../ListaDeTareas"; 
import { Tarea } from "../Tarea"; 
import { tareasContext } from "../TareasContext"; 

function UI() {
  return (
    <>
      <ContadorDeTareas />
      <BuscadorDeTareas />
      
      <tareasContext.Consumer>
        {({ error, loading, totalDeTareas, busquedaDeTareas, completarTarea, borrarTarea }) => (
          <ListaDeTareas>
            {error && <p>Error. Volvé a cargar la página. </p>}
            {loading && <p>Cargando... </p>} 
            {(!loading && (totalDeTareas === 0)) && <p>Agregá una tarea. </p>}
            
            {busquedaDeTareas.map(tarea => (
              <Tarea 
                key={tarea.id} 
                id={tarea.id} 
                text={tarea.texto} 
                hecha={tarea.hecha} 
                completar={() => completarTarea(tarea.id)} 
                borrar={() => borrarTarea(tarea.id)}
                />
            ))}
          </ListaDeTareas>
        )}
      </tareasContext.Consumer>
      
      
      <BotonCrearTarea />
    </>
  )
} 

export { UI }; 

