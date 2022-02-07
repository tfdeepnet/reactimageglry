import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

const a =  true;

ReactDOM.render(
  <React.StrictMode>
    {a ?<App /> : <h2>Hello from jsx</h2>}
  </React.StrictMode>,
  document.getElementById('root')
);

