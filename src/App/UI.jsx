import React from 'react'; 
import { BotonCrearTarea } from "../BotonCrearTarea"; 
import { BuscadorDeTareas } from "../BuscadorDeTareas";
import { ContadorDeTareas } from "../ContadorDeTareas"; 
import { ListaDeTareas } from "../ListaDeTareas"; 
import { Tarea } from "../Tarea"; 
import { tareasContext } from "../TareasContext"; 
import { Modal } from '../Modal'; 
import { FormularioTarea } from '../FormularioTarea'; 

function UI() { 

  const { 
    error, 
    loading, 
    totalDeTareas, 
    busquedaDeTareas, 
    completarTarea, 
    borrarTarea, 
    openModal, 
    setOpenModal
  } = React.useContext(tareasContext)
  return (
    <>
      <ContadorDeTareas />
      <BuscadorDeTareas />
      <ListaDeTareas>
        {error && <p>Error. Volvé a cargar la página. </p>}
        {loading && <p>Cargando... </p>} 
        {(!loading && (totalDeTareas === 0)) && <p>Agregá una tarea. </p>}
        
        {busquedaDeTareas.map(tarea => (
        <Tarea 
          key={tarea.texto}  
          text={tarea.texto} 
          hecha={tarea.hecha} 
          completar={() => completarTarea(tarea.texto)} 
          borrar={() => borrarTarea(tarea.texto)}
        />
        ))}
      </ListaDeTareas>

      {openModal && (
        <Modal>
          < FormularioTarea />
        </Modal>
      )}
      
   
      
      
      <BotonCrearTarea 
        setOpenModal={setOpenModal}
      />
    </>
  )
} 

export { UI }; 

