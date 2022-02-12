import Image from '../../../assets/camisa.png'
import './styles.css'

function Alfaiataria () {
    return (
        <section className='alfaiataria-body'>
            <div className="alfaiataria-title">
                <h1>Alfaiataria</h1>
            </div>
            <div className='alfaiataria-sub-title'>
                <p>totalmente  feito a mão  sob medida</p>
            </div>
            <div className='alfaiataria-info'>
                <li>Fio Super 120 e 130</li>
                <li>Lã fria Australiana</li>
                <li>Botões Importados</li>
            </div>
            <div className='alfaiataria-info2'>
                <li>Ternos e Calças</li>
                <li>Paletós e Smokings</li>
                <li>Sociais e Esportivos</li>
            </div>
            <div className='alfaiataria-btnn'>
                <a href="#">Quero um orçamento</a>
            </div>
            <div className='alfaiataria-image-linha'>
            <div className='alfaiataria-image'>
                <img src={Image}></img>
            </div>
            </div>
            
        </section>
    )
}

export default Alfaiataria