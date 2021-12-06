import React from 'react'; 
import './ListaDeTareas.css'

function ListaDeTareas(props) {
  return (
      <section>
        {props.children}
      </section>
  )
} 

export { ListaDeTareas }; 
