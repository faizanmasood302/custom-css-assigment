// components/Header.js
import Link from 'next/link';
import { FaBuilding } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <FaBuilding />
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="about-us">About</Link>
                    </li>
                    <li>
                        <Link href="services">Services</Link>
                    </li>
                    <li>
                        <Link href="#contactus">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
