import React,{useContext } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
 import Login from'./components/login'
import {Context,Hystory} from './api/context'

import Rota from "./routes"
function App() {
 const {logado,setLogado}= useContext(Context)

 if(logado){
  return  <Rota/> 
 }else{
   return  <Login/> 
 }
    
  
  
}

export default App;
