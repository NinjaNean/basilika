import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';   
import map from '../assets/map.png';



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
                        <FontAwesomeIcon icon={faTwitter} className='fonts'/>
                        <FontAwesomeIcon icon={faFacebook} className='fonts'/>
                        <FontAwesomeIcon icon={faInstagram} className='fonts'/>  
                        </section> 
                </div>

                <div className="footer-heading1">
                    <h4>Adress</h4>
                    <p className='footer-text'>Redegatan 2<br/>42155 Gothenburg </p>
                </div>

                <div className="footer-heading1">
                    <h4>Find us</h4>
                    <img className='small-map' src={map} alt="small map" />
                </div>
            
                <section className='footer-source'>
                    <p className='source'> Developed by Linnéa, Sally, Shweta, Malahat and Sara </p>
                </section>
            </div>
        </footer>
    );
}
export default Footer;