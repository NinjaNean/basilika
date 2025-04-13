import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';   
import { smallMap } from './assets/smallMap.jpg';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-heading1">
                    <h3>Basil</h3>
                    <p>Besök oss i Göteborg och<br/> smaka på våra rätter med<br/> ursprung i det asisatiaska köket</p>
                </div>

                <div className="footer-heading1">
                    <h4>Kontakt</h4>
                    <p>basil@gmail.com <br />031-123456</p>
                        <section className='footer-font'>
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />  
                        </section> 
                </div>

                <div className="footer-heading1">
                    <h4>Adress</h4>
                    <p>Redegatan 2<br/>42155 Göteborg </p>
                </div>

                <div className="footer-heading1">
                    <h4>Hitta oss</h4>
                    <img src={smallMap} alt="small map" />
                </div>
            </div>
                <section className='footer-source'>
                    <p> Utvecklad och designad av Linnéa, Sally, Shweta, Malahat och Sara </p>
                </section>
        </footer>
    );
}
export default Footer;