import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Hystory} from './api/context'


ReactDOM.render(
  <React.StrictMode>
    <Hystory>
    <App />
    </Hystory>
  </React.StrictMode>,
  document.getElementById('root')
);

