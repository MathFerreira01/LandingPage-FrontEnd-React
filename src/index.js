import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/views/home';
import Header from './components/header'
import Camisaria from './components/views/camisaria';
import Condicoes from './components/views/condicoes';
import Alfaiataria from './components/views/alfaiataria';
import Depoinmentos from './components/views/depoimentos';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Condicoes/>
    <Camisaria/>
    <Alfaiataria/>
    <Depoinmentos/>
  </React.StrictMode>,
  document.getElementById('root')
);

