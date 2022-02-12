import "./styles.css";

import Image from '../../../assets/1-0 1.png'

function Camisaria() {
  return (
    <section className="body-camisaria">
      <div className="title-camisaria">
        <h2>CAMISARIA</h2>
      </div>
      <div className="text-camisaria">
        <p>confeccionadas artesanalmente</p>
      </div>
      <div className="informacao-camisaria">
        <li>100% Algodão</li>
        <li>Monograma</li>
        <li>Slim</li>
      </div>
      <div className="segunda-informacao-camisaria">
        <li>Nacionais e Importadas</li>
        <li>Tradicionais e Esportivas</li>
        <li>Casamentos</li>
      </div>
      <div className="camisaria-btnn">
        <a href="#">Quero um orçamento</a>
      </div>
      <div className="camisaria-image-linha">
      <div className="camisaria-image">
        <img src={Image}></img>
      </div>
      </div>
    </section>
  );
}

export default Camisaria;
