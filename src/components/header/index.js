import "./styles.css";

import SVG from '../../assets/Vector (6).svg'

function Header({white}) {
  return (
    <div className="body-header">
      <header className={white ? 'whithe' : ''}>
        <nav>
          <img className="nav-img" src={SVG} alt=""/>
          <a class="logo" alt="">Renee<br/>Trajar</a>
          <ul class="nav-list">
            <li>
              <a href="#">Empresa</a>
            </li>
            <li>
              <a href="#">Camisaria</a>
            </li>
            <li>
              <a href="#">Alfaiataria</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        </header>
        <form>
          <div className="first-title">
            <h4>Elegante é ter um</h4>
          </div>
          <div className="second-title">
            <h2>Alfaiate</h2>
          </div>
          <div className="third-title">
            <h4>para chamar de seu.</h4>
            <div className="div-text">
              <p>
                COMPRE HOJE, PAGUE EM ATÉ 3X COM 12% DE DESCONTO E TENHA 10
                MESES PARA CONFECCIONAR!
              </p>
            </div>
            <div className="button-header">
                <a href="#">Faça já um Orçamento</a>
              </div>
          </div>
        </form>
      

      <main></main>
    </div>
  );
}

export default Header;
