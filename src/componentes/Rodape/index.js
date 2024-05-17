import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="Rodape">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="imagem do facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="imagem do twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="imagem do instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Jogador com a bola no pé" />
            </section>
            <section>
                <p>
                   Desenvolvido por Leonardo Camporesi.
                </p>
            </section>
        </footer>
    )
}
export default Rodape