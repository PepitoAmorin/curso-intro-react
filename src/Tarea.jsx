import React from 'react'; 
import './Tarea.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function Tarea(props) {
  return (
    <li className="tarea">
      <span>
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <p>{props.text}</p>
      <span>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  )
} 

export { Tarea }; 
