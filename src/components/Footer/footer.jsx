import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import S from './footer.module.scss';

export default function Footer() {
    return (
        <footer>
            <section className={S.boxteste}>
                <h3>4002-8922</h3>
                <nav>
                    <a href="#"><img src={facebook} alt="Logo Facebook"/></a>
                    <a href="#"><img src={twitter} alt="Logo Twitter"/></a>
                    <a href="#"><img src={youtube} alt="Logo YouTube"/></a>
                    <a href="#"><img src={linkedin} alt="Logo LinkedIn"/></a>
                    <a href="#"><img src={instagram} alt="Logo Instagram"/></a>
                </nav>
            </section>
            <section>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
            </section>
        </footer>

    )
}