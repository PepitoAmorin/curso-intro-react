import React from 'react'; 
import { useLocalStorage } from './useLocalStorage'; 

const tareasContext = React.createContext(); 

function TareasProvider(props) { 

  const {
    error, 
    loading, 
    tareas, 
    guardarTareas
  } = useLocalStorage('TareasV1', []); 

  // llamamos al estado de la búsqueda
  const [busqueda, setBusqueda] = React.useState('');
  // tareas totales y completadas 
  const totalDeTareas = tareas.length; 
  const tareasCompletadas = tareas.filter(tarea => tarea.hecha === true).length; 

  const [openModal, setOpenModal] = React.useState(false); 

  let busquedaDeTareas = []; 
  if (busqueda.length >= 1) {
    busquedaDeTareas = tareas.filter(tarea => {
      //pasamos todos los textos a minúscula 
      const textoTareaEnMin = tarea.texto.toLowerCase(); 
      const textoBusquedaEnMin = busqueda.toLowerCase(); 
      //hacemos la comparación
      return textoTareaEnMin.includes(textoBusquedaEnMin); 
    }); 
  } else {
    busquedaDeTareas = tareas; 
  } 

  

  // función para marcar la tarea como hecha
  const completarTarea = texto => {
    const indiceTarea = tareas.findIndex(tarea => tarea.texto === texto); 
    // hay que mandar nueva lista de tareas con los cambios
    // primero la hacemos
    const nuevasTareas = [...tareas] 
    // después cambiamos el .hecha de la tarea completada
    if (!nuevasTareas[indiceTarea].hecha) {
      nuevasTareas[indiceTarea].hecha = true; 
    } else {
      nuevasTareas[indiceTarea].hecha = false;
    }
    // después mandamos cambiar el estado al localStorage (persistencia)
    guardarTareas(nuevasTareas); 
  };  

  const borrarTarea = texto => {
    const indiceTarea = tareas.findIndex(tarea => tarea.texto === texto); 
    const nuevasTareas = [...tareas]; 
    nuevasTareas.splice(indiceTarea, 1); 
    guardarTareas(nuevasTareas);
  }; 

  const agregarTarea = texto => { 
    const nuevasTareas = [...tareas]; 
    nuevasTareas.push({ 
      texto,
      hecha: false
    }); 
    guardarTareas(nuevasTareas);
  }; 

  return(
    <tareasContext.Provider value={{
      error,
      loading,
      totalDeTareas,
      tareasCompletadas,
      busqueda,
      setBusqueda,
      busquedaDeTareas,
      completarTarea,
      borrarTarea, 
      openModal, 
      setOpenModal, 
      guardarTareas, 
      agregarTarea
    }}>
      {props.children}
    </tareasContext.Provider>
  ); 
} 

export { tareasContext, TareasProvider }; 