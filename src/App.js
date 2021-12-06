import './App.css'; 
import { BotonCrearTarea } from "./BotonCrearTarea"; 
import { BuscadorDeTareas } from "./BuscadorDeTareas";
import { ContadorDeTareas } from "./ContadorDeTareas"; 
import { ListaDeTareas } from "./ListaDeTareas"; 
import { Tarea } from "./Tarea"; 

const tareas = [
  {
    id: 1, 
    texto: 'ejemplo tarea número uno', 
    hecha: false
  }, 
  {
    id: 2, 
    texto: 'segunda tarea (2)', 
    hecha: false
  }, 
  {
    id: 3, 
    texto: 'otra tarea, esta es la tercera', 
    hecha: true
  }, 
  {
    id: 4, 
    texto: 'una tarea más, la cuarta (4)', 
    hecha: false
  },
]; 

function App(props) {
  return (
    <>
      <ContadorDeTareas />
      <BuscadorDeTareas />
      <ListaDeTareas>
        {tareas.map(tarea => (<Tarea key={tarea.id} text={tarea.texto}/>))}
      </ListaDeTareas>
      <BotonCrearTarea />
    </>
  );
}

export default App;
