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

                    <h4>バジル Basil</h4>
                    <p className='footer-text'>Taste our dishes with origin in asian cuisine</p>
                </div>

                <div className="footer-heading1">
                    <h4>Contact</h4>
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
                    <p className='footer-text'> 42155 Gothenburg</p>
                </div>

                <div className="footer-heading1">
                    <h4>Find us</h4>
                    <p className='footer-text'>We are 100m from the city bus stop</p>
                    {/* <img src={smallMap} alt="small map" /> */}
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
