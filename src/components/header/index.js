import "./styles.css";

function Header() {
  return (
    <div className="body-header">
      <header>
        <nav>
          <a class="logo" href="/">
            LOGO
          </a>
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
      </header>

      <main></main>
    </div>
  );
}

export default Header;
