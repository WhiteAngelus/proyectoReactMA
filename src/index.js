// Importamos las librerias necesarias
import React from 'react';
import ReactDOM  from 'react-dom';
// importamos el componente App
import { App } from './App';

// Creamos constantes locales
const elemento = <h1>Buenas tardes</h1>;
const rootElement = document.getElementById('root');
// llamamos al método render de ReactDOM
//      indicamos que el elemento a cargar es App
ReactDOM.render(<App />,rootElement);
