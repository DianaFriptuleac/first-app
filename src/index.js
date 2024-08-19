import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  //incorpora app. come se importassimo './App.js'
//import reportWebVitals from './reportWebVitals'; collegata alla riga 17 che nn ci serve
//recupera l'id di html.Crea un elemento radice e lo asegna ad una variabile. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  //invoco render. Utilizza la rradice per montare nella pag il componentte React che si chiama App
  //<React.StrictMode>// non ci seve al momento
    <App /> //il nostro primo componente react
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();  //non ci serve al momento, misura le metriche
