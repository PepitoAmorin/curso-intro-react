import React from 'react'; 
import './BotonCrearTarea.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function BotonCrearTarea() {
  return (
      <button className="crear-tarea"> 
        <span class="tooltip">Tooltip text</span>
        <FontAwesomeIcon className="icono" icon={faPlus} />
      </button>
  )
}

export { BotonCrearTarea }; 