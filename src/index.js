import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/header/layout";
import Home from "./components/views/home";
import Camisaria from "./components/views/camisaria";
import Condicoes from "./components/views/condicoes";
import Alfaiataria from "./components/views/alfaiataria";
import Depoinmentos from "./components/views/depoimentos";
import Contatos from "./components/views/contatos";
import Footer from "./components/views/footer";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <Home />
    <Camisaria />
    <Condicoes />
    <Alfaiataria />
    <Depoinmentos />
    <Contatos />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
