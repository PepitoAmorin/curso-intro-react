import React from 'react'; 
import './BotonCrearTarea.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons' 

function BotonCrearTarea(props) { 

  const crearTarea = () => props.setOpenModal(prevState => !prevState); 

  return (
      <button 
        className="crear-tarea" 
        onClick={crearTarea}
      > 
        <span className="tooltip">Agregate una tarea amigue ;)</span>
        <FontAwesomeIcon className="icono" icon={faPlus} />
      </button>
  )
}

export { BotonCrearTarea }; 