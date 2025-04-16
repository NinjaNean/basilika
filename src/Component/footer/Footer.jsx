import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import smallMap from '../../assets/smallMap.png';
import smallLogo from '../../assets/smallLogo.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

            <section className='footer-section'>
                <div className="footer-heading1">

                    <img src={smallLogo} alt="Logo" className="small-logo" />
                    <p className='footer-text first'>Taste our dishes with origin in asian cuisine</p>
                </div>

                <div className="footer-heading1">
                    <h4>Contact</h4>
                    <p className='footer-text second'> basil@gmail.se 031-123456</p>
                        <section className='footer-font'>
                        <FontAwesomeIcon icon={faInstagram} className='fonts'/>
                        <FontAwesomeIcon icon={faTwitter} className='fonts'/> 
                        <FontAwesomeIcon icon={faFacebook} className='fonts'/>
                        </section> 
                </div>
            </section>
                
            <section className='footer-section'>   
                <div className="footer-heading1">
                    <h4>Adress</h4>
                    <p className='footer-text third'>Redegatan 2, 42155 Gothenburg </p>
                </div>

                <div className="footer-heading1">
                    <h4>Find us</h4>
                    <img src={smallMap} alt="small map" />
                </div>
            </section>
            
                <section className='footer-source'>
                    <p className='source'> Developed by Sally, Linnéa, Shweta, Malahat and Sara </p>
                </section>
                </div>
        </footer>
    );
}
export default Footer;
