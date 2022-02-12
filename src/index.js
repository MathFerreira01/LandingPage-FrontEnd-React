import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/views/home';
import Header from './components/header'
import Camisaria from './components/views/camisaria';
import Condicoes from './components/views/condicoes';
import Alfaiataria from './components/views/alfaiataria';
import Depoinmentos from './components/views/depoimentos';
import Contatos from './components/views/contatos';
import Footer from './components/views/footer';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Condicoes/>
    <Camisaria/>
    <Alfaiataria/>
    <Depoinmentos/>
    <Contatos/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

