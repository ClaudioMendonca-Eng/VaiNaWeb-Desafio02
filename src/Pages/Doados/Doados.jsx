//import Livro01 from '../../assets/cardbook.png';
import S from './doados.module.scss';
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function Doados() {
    const [livros, setLivros] = useState([]); // Estado para armazenar os livros
    
    const getLivros = async () => {
        try {
            const response = await axios.get("https://vainaweb-api-livros.onrender.com/livros")
            setLivros(response.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }


    useEffect(() => {
        getLivros(); // Chama a função para obter os livros quando o componente é montado
    }, []);
    
    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                {livros.map((item) => (
                    <article key={item.id}>
                        <img src={item.imagem_url} alt="Imagem do Livro" />
                                <h3>Título: {item.titulo}</h3>
                                <p>Autor: {item.autor}</p>
                                <p>Categoria: {item.categoria}</p>
                    </article>
                ))}
            </section>
        </section>
    );
}
