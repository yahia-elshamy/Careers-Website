import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Styles from './navbar.module.css';

export default function Navbar() {
    return (<>
        <nav className={Styles.nav}>
            <div className={Styles.navContainer}>
                <div className={Styles.logoContainer}>
                    <img src={Logo} alt="Careers website logo" />
                    </div>

                    <div className={Styles.linksContainer}>
                        <div className={Styles.linksWrapper}>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Find Jobs</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>

                        <div className={Styles.btnWrapper}>
                            <button className={Styles.registerBtn}>Register</button>
                            <button className={Styles.signupBtn}>Sign Up</button>
                        </div>
                    </div>
            </div>
        </nav>
        </>);
}