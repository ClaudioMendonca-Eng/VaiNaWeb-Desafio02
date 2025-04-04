import S from './doados.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Doados() {
    const [livros, setLivros] = useState([]); // Estado para armazenar os livros
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

    const getLivros = async () => {
        try {
            const response = await axios.get("https://vainaweb-api-livros.onrender.com/livros");
            setLivros(response.data);
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
        } finally {
            setIsLoading(false); // Define como falso após a busca, seja sucesso ou erro
        }
    };

    useEffect(() => {
        getLivros(); // Chama a função para obter os livros quando o componente é montado
    }, []);

    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            {isLoading ? ( // Exibe o pre-load enquanto está carregando
                <div className={S.loader}>Carregando...</div>
            ) : (
                <section className={S.boxBooks}>
                    {livros.length > 0 ? (
                        livros.map((item) => (
                            <article key={item.id}>
                                <img src={item.imagem_url} alt="Imagem do Livro" />
                                <h3>Título: {item.titulo}</h3>
                                <p>Autor: {item.autor}</p>
                                <p>Categoria: {item.categoria}</p>
                            </article>
                        ))
                    ) : (
                        <p>Nenhum livro encontrado.</p>
                    )}
                </section>
            )}
        </section>
    );
}