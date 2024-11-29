import Livro01 from '../../Assets/01livro.png';
import S from './doados.module.scss';

export default function Doados() {
    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                <article>
                    <img src={Livro01} alt="Imagem do Livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={Livro01} alt="Imagem do Livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={Livro01} alt="Imagem do Livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={Livro01} alt="Imagem do Livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    );
}
