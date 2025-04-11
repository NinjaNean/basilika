import './Footer.css';

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
                <p>contactbasil@gmail.com <br />031-123456</p>
                    <section className='footer-font'>
                        <p>Font</p>
                        <p>Font</p>
                    </section> 
            </div>

            <div className="footer-heading1">
                <h4>Adress</h4>
                <p>Redegatan 2<br/>42155 Göteborg </p>
            </div>

            <div className="footer-heading1">
                <h4>Hitta oss</h4>
                <p>Liten karta</p>
            </div>
        </div>
        </footer>
    );
}
export default Footer;