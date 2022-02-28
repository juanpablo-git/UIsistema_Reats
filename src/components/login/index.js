import React from 'react';
import './style.css'
import {log} from "../../App"
function login() {
  return (
    <div className='container-login'>

      <div className='container-modal'>

        <div className='container-left'></div>
        <div className='container-right'>
          <form action="/" >
            <label from="email">Email:</label>
            <input type="text" name="email"placeholder='digite seu email'/>
            <label from="senha">Senha:</label>
            <input type="password" name="senha" placeholder="digite sua senha"/>
            <button onClick={()=> log = true}>Login</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default login;