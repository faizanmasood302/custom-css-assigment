// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contactus">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@yourcompany.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <Link href="#"><FaFacebook /></Link>
                        <Link href="#"><FaTwitter /></Link>
                        <Link href="#"><FaLinkedin /></Link>
                        <Link href="#"><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; 2023 Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
