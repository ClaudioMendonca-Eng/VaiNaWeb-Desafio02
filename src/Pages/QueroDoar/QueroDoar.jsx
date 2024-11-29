import Livro from '../../assets/livro.png';
import S from './QueroDoar.module.scss';

export default function QueroDoar() {
    return (
        <section className={S.principal}>
            <section className={S.container}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <form action=''>
                <div>
                    <img src={Livro} alt='Logo  de Livro'/>
                    <h3>Informações do Livro</h3>
                </div>
                <input type='text' placeholder='Titulo' required/>
                <input type='text' placeholder='Categoria' required/>
                <input type='text' placeholder='Autor' required/>
                <input type='text' placeholder='Link da Imagem' required/>
                <input className={S.doar} type='submit' value='Doar'/>
            </form>
            </section>
        </section>
    );
}

