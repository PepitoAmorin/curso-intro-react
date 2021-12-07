import React from 'react'
import './App.css'; 
import { UI } from "./UI"; 
import { TareasProvider } from '../TareasContext/index.js'

function App(props) { 
  
  return ( 
    <TareasProvider>
      <UI /> 
    </TareasProvider>
  );
}

export default App;
