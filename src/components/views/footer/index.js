import './styles.css'

import SvgFooter from '../../../assets/Vector (6).svg'

function Footer() {
  return (
    <section>
        <div className='footer-logo'>
            <img src={SvgFooter} alt=""/>
        </div>
        <div className='footer-name'>
            <p>Renee<br/>
               Trajar</p>
        </div>
      <div className="contatos-cnpj">
        <p>CNPJ:04.487.685/0001-01</p>
      </div>
      <div className="contato-copyright">
        <p>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>
      </div>
    </section>
  );
}

export default Footer