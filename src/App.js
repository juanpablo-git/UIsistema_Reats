import React,{useEffect} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
 import Login from'./components/login'
 import ToolBar from './components/tolbar'
 import Api from './api/index'
// import Chamados from './components/Chamados'
// import Perfil from './components/Perfil'
import Rota from "./routes"

export const log = false
function App() {
  


 if(log){
  return ( <Rota/> ) 
 }else{
   return <Login/>
 }
    
    // <BrowserRouter>
    // <div style={{display:"flex",flexDirection:"row"}}>
    // <ToolBar />
    // <Routes>
    // <Rota />
    // </Routes>
    // </div>
    // </BrowserRouter>
  
  
}

export default App;
