import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { NavLink } from 'react-router';
import { faLock } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

            <section className='footer-section'>
                <div className="footer-heading1">

                    <h4>バジル Basil</h4>
                    <p className='footer-text'>Testa våra rätter med ursprung ur det asiatiska köket</p>
                </div>

                <div className="footer-heading1">
                    <h4>Kontakt</h4>
                    <p className='footer-text'> basil@gmail.se </p>
                    <p className='footer-text'> 031-123456 </p>
                        <section className='footer-font'>
                        
                        <FontAwesomeIcon icon={faInstagram} fontSize={'20'}className='fonts'/>
                        <FontAwesomeIcon icon={faTwitter} className='fonts'/> 
                        <FontAwesomeIcon icon={faFacebook} className='fonts'/>
                        </section> 
                </div>
            </section>
                
            <section className='footer-section'>   
                <div className="footer-heading1">
                    <h4>Adress</h4>
                    <p className='footer-text'>Redegatan 2 </p>
                    <p className='footer-text'> 42155 Göteborg</p>
                </div>

                <div className="footer-heading1">
                    <h4>Find us</h4>
                    <p className='footer-text'>Du hittar oss 100m från busshållpats</p>
                   
                </div>
            </section>
            
                <section className='footer-source'>
                <NavLink className='lock-button' to="/signin">
                    <FontAwesomeIcon icon={faLock} className="lock" />
                    <span className='hover-text'>Admin</span>
                </NavLink>
                    <p className='source'> Utvecklad av Sally, Linnéa, Shweta, Malahat och Sara </p>
                </section>
                </div>
        </footer>
    );
}
export default Footer;
