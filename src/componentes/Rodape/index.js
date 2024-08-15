import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="Rodape">
            <section>
                <ul>
                    <li>
                        <a href="https://github.com/LeoInStorm">
                            <img src="/imagens/logo-github.png" alt="imagem do facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/leonardo-camporesi/">
                            <img src="/imagens/logo-linkedin.png" alt="imagem do twitter" />
                        </a>
                    </li>
                </ul>
            </section>            
            <section>
                <p>
                   Por Leonardo Camporesi.
                </p>
            </section>
        </footer>
    )
}
export default Rodape