import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';   
import smallMap from '../assets/smallMap.png';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-heading1">
                     <h4 className='basil-header'>Basil</h4>  
                    <p className='footer-text'>Visit us in Gothenburg<br/> and taste our dishes with<br/> origin in asian cuisine</p>
                </div>

                <div className="footer-heading1">
                    <h4>Contact</h4>
                    <p className='footer-text'> basil@gmail.com <br />031-123456</p>
                        <section className='footer-font'>
                        <FontAwesomeIcon icon={faInstagram} className='fonts'/>
                        <FontAwesomeIcon icon={faTwitter} className='fonts'/> 
                        <FontAwesomeIcon icon={faFacebook} className='fonts'/>
                        </section> 
                </div>
                
                <div className="footer-heading1">
                    <h4>Adress</h4>
                    <p className='footer-text'>Redegatan 2<br/>42155 Gothenburg </p>
                </div>

                <div className="footer-heading1">
                    <h4>Find us</h4>
                    <img src={smallMap} alt="small map" />
                </div>
            
                <section className='footer-source'>
                    <p className='source'> Developed by Sally, Linnéa, Shweta, Malahat and Sara </p>
                </section>
            </div>
        </footer>
    );
}
export default Footer;
