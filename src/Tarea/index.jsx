import React from 'react'; 
import './Tarea.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function Tarea({ text, hecha, completar, borrar}) { 
  return ( 
    <li className="tarea">
      <span 
        className={`tick ${hecha && 'tick--hecho'}`} 
        onClick={ completar } 
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <p className={`texto ${hecha && 'texto--hecho'}`}>{text}</p>
      <span 
        className="basura" 
        onClick={borrar}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  )
} 

export { Tarea }; 
