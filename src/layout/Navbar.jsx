import Logo from '../assets/images/logo.png';
import Styles from './navbar.module.css';

export default function Navbar() {
    return (<>
        <nav className={Styles.navContainer}>
            <div className={Styles.logoContainer}>
                <img src={Logo} alt="Careers website logo" />
            </div>

            <div className={Styles.linksContainer}>
                <div className={Styles.linksWrapper}>
                    <ul>
                        <li>Home</li>
                        <li>Find Jobs</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className={Styles.btnWrapper}>
                    <button className={Styles.registerBtn}>Register</button>
                    <button className={Styles.signupBtn}>Sign Up</button>
                </div>
            </div>
        </nav>
        </>);
}