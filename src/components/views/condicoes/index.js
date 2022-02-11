import './styles.css'

import Image from '../../../assets/anzug-fuer-herren-mit-weste 1.png'

function Condicoes () {
    return (
        <section className="condiçoes-body">
            <div className='condicoes-title'>
                <h1>Condição Imperdível</h1>
            </div>
            <div className='condicoes-sub-title'>
                <h6>Compre hoje e garanta:</h6>
            </div>
            <div className='condicoes-text'>
                <p>- 12% de desconto e pagamento em até 3x sem juros;<br/><br/>
                   - Até 10 meses para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;<br/><br/>
                   - Condição muito especial por tempo limitado;<br/><br/>
                   - Poder presentear alguém com uma roupa de alta costura, exclusiva.
                </p>
            </div>
            <div className='condicoes-bnt'>
                <a href="#">Garanta essa condição especial!</a>
            </div>
            <div className='condicoes-image'>
                <img src={Image} alt=''/>
            </div>
        </section>
    )
}

export default Condicoes