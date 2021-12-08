import React from 'react'
import { tareasContext } from '../TareasContext'; 
import './FormularioTarea.css'; 

function FormularioTarea() { 
  const [textoNuevaTarea, setTextoNuevaTarea] = React.useState(''); 

  const { agregarTarea, setOpenModal } = React.useContext(tareasContext); 

  const onEscribirTarea = (texto) => {
    setTextoNuevaTarea(texto.target.value); 
  } 

  const onCancelar = () => {
    setOpenModal(false); 
  } 

  const onAgregar = (envio) => {
    envio.preventDefault(); 
    agregarTarea(textoNuevaTarea); 
    setOpenModal(false); 
  } 

  return (
    <form onSubmit={onAgregar}>
      <label>Escribí la tarea</label>
      <textarea 
        value={textoNuevaTarea} 
        onChange={onEscribirTarea}
        placeholder='Escribe acá tu tarea'
      />
      <div>
        <button 
          className='cancelar'
          type='button'
          onClick={onCancelar}
        >
          Cancelar
        </button>
        <button 
          className='agregar'
          type='submit'
        >
          Añadir tarea
        </button>
      </div>
    </form>
  )
} 

export { FormularioTarea }; 

