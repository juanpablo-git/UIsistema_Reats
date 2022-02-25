import React from 'react';
import './style.css'
function login() {
  return (
    <div className='container-login'>

      <div className='container-modal'>

        <div className='container-left'></div>
        <div className='container-right'>
          <form action='/perfil'>
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

export default login;