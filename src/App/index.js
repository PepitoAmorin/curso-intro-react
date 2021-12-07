import React from 'react'
import './App.css'; 
import { UI } from "./UI"; 

function App(props) { 
  // localStorage 
  const tareasEnLS = localStorage.getItem('TareasV1'); 
  let tareasDeLSParseadas; 
  if (!tareasEnLS) { 
    localStorage.setItem('TareasV1', '[]'); 
    tareasDeLSParseadas = []; 
  } else {
    tareasDeLSParseadas = JSON.parse(tareasEnLS);
  }

  // llamamos al estado de la lista de tareas
  const [tareas, setTareas] = React.useState(tareasDeLSParseadas);
  // llamamos al estado de la búsqueda
  const [busqueda, setBusqueda] = React.useState('');
  // tareas totales y completadas 
  const totalDeTareas = tareas.length; 
  const tareasCompletadas = tareas.filter(tarea => tarea.hecha === true).length; 

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

  // función para guardar tareas 
  const guardarTareas = (lista) => {
    const listaEnString = JSON.stringify(lista); 
    localStorage.setItem('TareasV1', listaEnString); 
    // tenemos que actualizar el estado de los componentes en la aplicación también 
    setTareas(lista); 
  }

  // función para marcar la tarea como hecha
  const completarTarea = id => {
    const indiceTarea = tareas.findIndex(tarea => tarea.id === id); 
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

  const borrarTarea = id => {
    const indiceTarea = tareas.findIndex(tarea => tarea.id === id); 
    const nuevasTareas = [...tareas]; 
    nuevasTareas.splice(indiceTarea, 1); 
    guardarTareas(nuevasTareas);
  }; 

  return (
    <UI 
    totalDeTareas={totalDeTareas} 
    tareasCompletadas={tareasCompletadas} 
    busqueda={busqueda}
    setBusqueda={setBusqueda} 
    busquedaDeTareas={busquedaDeTareas}
    completarTarea={completarTarea} 
    borrarTarea={borrarTarea}
    />
  );
}

export default App;
