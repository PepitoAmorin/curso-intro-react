import React from 'react'; 

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

export { useLocalStorage }; 