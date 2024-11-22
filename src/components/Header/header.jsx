import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Busca from '../../assets/busca.png';
import Logo from '../../assets/logo.png';
import Doados from '../../Pages/Doados/Doados';
import Inicio from '../../Pages/Inicio/Inicio';
import QueroDoar from '../../Pages/QueroDoar/QueroDoar';
import S from './header.module.scss';

export default function header() {
    return (
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={Logo} alt="Imagem de um livro - LOGO" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/doados">Livros Doados</Link></li>
                <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder="O que você procura?" />
                <img src={Busca} alt="Imagem de uma lupa - BUSCA" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/doados" element={<Doados/>} />
            <Route path="/queroDoar" element={<QueroDoar/>} />
        </Routes>
        </BrowserRouter>
    );
    }