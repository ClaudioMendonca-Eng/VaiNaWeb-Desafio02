

export default function QueroDoar() {
    return (
        <section>
            <h2>Quero Doar</h2>
            <p>
                Se você tem livros em casa que não usa mais, você pode doá-los para o Livros Vai na Web
                e ajudar outras pessoas a terem acesso a uma leitura de qualidade.
            </p>
            <p>
                Para doar, basta preencher o formulário abaixo e aguardar o contato da nossa equipe.
            </p>
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required />
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required />
                <label htmlFor="livros">Livros:</label>
                <textarea id="livros" name="livros" required />
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

