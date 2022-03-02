import React,{useContext} from 'react';
import './style.css'
import {Context} from "../../api/context"
function Login() {
 
  const {logado,setLogado} = useContext(Context)
  
  return (
    <div className='container-login'>

      <div className='container-modal'>

        <div className='container-left'></div>
        <div className='container-right'>
          <form onSubmit={(e)=>{
            e.preventDefault()
           setLogado(true)
           

           
          }} >
            <label from="email">Email:</label>
            <input type="text" name="email"placeholder='digite seu email'/>
            <label from="senha">Senha:</label>
            <input type="password" name="senha" placeholder="digite sua senha"/>
            <button >Login</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Login;