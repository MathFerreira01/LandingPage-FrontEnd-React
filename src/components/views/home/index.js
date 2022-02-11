import "./styles.css";

function Home() {
  return (
    <div>
      <div className="image"></div>
      <div className="text">
        <div className="div-title">
          <h4>Renee Trajar</h4>
        </div>
        <p>
          Com mais de 35 anos de experiência em camisas, calças e ternos sob
          medida, possuímos profissionais experientes e altamente qualificados.
          <br />
          <br />
          Cada cliente tem seu molde exclusivamente desenvolvido para seu
          biotipo através das medidas tiradas pelo próprio Sr. Renee, no
          escritório ou residência do cliente.
        </p>
      </div>
      <form>
        <div className="text-second">
          <p>
            “Nosso objetivo é superar a expectativa do cliente
            proporcionando-lhe satisfação ao usar nossos produtos, aliado a um
            relacionamento franco e honesto, valorizando o ser humano.”
          </p>
        </div>
        <div className="home-btnn">
            <a href="#">Agende uma visita!</a>
        </div>
        <div className="empresa-introducao">
          <p>
            “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
            impecável em todos os detalhes, desde a costura ao caimento. O Renee
            tem uma equipe de mestre!”
          </p>
        </div>
        <div>
          <div className="imagem-advogado-empresa"></div>
          <div className="retangulo-azul">
            <div className="segunda-imagem-advogado"></div>
          </div>
          <div className="nome-empresa">
            <p>Nelson Garey</p>
          </div>
          <div className="nome-advogado-empresa">
            <p>Advogado | Nelson Garey Advogados Associados</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
