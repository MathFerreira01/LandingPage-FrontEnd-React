import "./styles.css";

import ImagePerfil from '../../../assets/Ellipse 89.png'

function Depoinmentos() {
  return (
    <section className="background-depoimentos">
      <div className="depoimentos-title">
        <h1>Depoimentos</h1>
      </div>
      <div className="depoimentos-image">
        <img src={ImagePerfil} alt=""/>
      </div>
      <div className="depoimentos-text">
        <p>
          “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por
          intermédio de meu pai, que já tem uma história de décadas com o
          querido Renee. <br />
          O excelente atendimento antes e pós venda e a alta qualidade dos
          materiais usados colocam a Renee Trajar em um patamar acima dos demais
          do ramo.”
        </p>
      </div>
      <div className="depoimentos-nome">
        <p>William H. M. Garey</p>
      </div>
      <div className="depoimentos-profissao">
        <p>Advogado | Nelson Garey Advogados Associados</p>
      </div>
    </section>
  );
}

export default Depoinmentos;
