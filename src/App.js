import React from 'react'
import './App.css'; 
import { BotonCrearTarea } from "./BotonCrearTarea"; 
import { BuscadorDeTareas } from "./BuscadorDeTareas";
import { ContadorDeTareas } from "./ContadorDeTareas"; 
import { ListaDeTareas } from "./ListaDeTareas"; 
import { Tarea } from "./Tarea"; 

const tareasPorDefecto = [
  {
    id: 1, 
    texto: 'ejemplo tarea número uno', 
    hecha: false
  }, 
  {
    id: 2, 
    texto: 'segunda tarea (2)', 
    hecha: true
  }, 
  {
    id: 3, 
    texto: 'otra tarea, esta es la tercera', 
    hecha: true
  }, 
  {
    id: 4, 
    texto: 'una tarea más, la cuarta (4)', 
    hecha: true
  },
]; 

function App(props) { 
  // llamamos al estado de la lista de tareas
  const [tareas, setTareas] = React.useState(tareasPorDefecto);
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
    if (nuevasTareas[indiceTarea].hecha === false) {
      nuevasTareas[indiceTarea].hecha = true; 
    } else {
      nuevasTareas[indiceTarea].hecha = false;
    }
    // después mandamos cambiar el estado al Componente
    setTareas(nuevasTareas); 
  };  

  const borrarTarea = id => {
    const indiceTarea = tareas.findIndex(tarea => tarea.id === id); 
    const nuevasTareas = [...tareas]; 
    nuevasTareas.splice(indiceTarea, 1); 
    setTareas(nuevasTareas);
  }; 

  return (
    <>
      <ContadorDeTareas 
        totalDeTareas={totalDeTareas} 
        tareasCompletadas={tareasCompletadas}
      />
      <BuscadorDeTareas 
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <ListaDeTareas>
        {busquedaDeTareas.map(tarea => (
        <Tarea 
          key={tarea.id} 
          id={tarea.id} 
          text={tarea.texto} 
          hecha={tarea.hecha} 
          completar={() => completarTarea(tarea.id)} 
          borrar={() => borrarTarea(tarea.id)}
          />))}
      </ListaDeTareas>
      <BotonCrearTarea />
    </>
  );
}

export default App;
