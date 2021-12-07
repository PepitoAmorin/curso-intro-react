import React from 'react'
import './App.css'; 
import { UI } from "./UI"; 

function useLocalStorage(listaDeTareas, valorInit) { 
  const [loading, setLoading] = React.useState(true); 
  const [error, setError] = React.useState(false); 

  // llamamos al estado de la lista de tareas
  const [tareas, setTareas] = React.useState(valorInit);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // localStorage 
        const tareasEnLS = localStorage.getItem(listaDeTareas); 
        let tareasDeLSParseadas; 
        if (!tareasEnLS) { 
          localStorage.setItem(listaDeTareas, JSON.stringify(valorInit)); 
          tareasDeLSParseadas = valorInit; 
        } else {
          tareasDeLSParseadas = JSON.parse(tareasEnLS);
        } 

        setTareas(tareasDeLSParseadas); 
        setLoading(false); 
      } catch(error) {
        setError(error); 
      }
      
    }, 3000)
  }); 

  // función para guardar tareas en localStorage
  const guardarTareas = (lista) => { 
    try {
      const listaEnString = JSON.stringify(lista); 
      localStorage.setItem(listaDeTareas, listaEnString); 
      // tenemos que actualizar el estado de los componentes en la aplicación también 
      setTareas(lista); 
    } catch(error) {
      setError(error);
    }
    
  } 

  return { 
    error, 
    loading, 
    tareas, 
    guardarTareas
  }
}

function App(props) { 
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
    error={error}
    loading={loading}
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
