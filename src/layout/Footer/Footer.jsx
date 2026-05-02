import Styles from './footer.module.css'

export default function Footer() {
    return(<>
        <footer>
            <div className={Styles.firstSection}>
                <p className={Styles.wazzafny}>Wazzafny</p>
                <div className={Styles.tableCon}>
                    <table>
                        <tr>
                            <th>Services</th>
                            <th>Company</th>
                            <th>Support</th>
                        </tr>
                        <tr>
                            <td>Browse Jobs</td>
                            <td>About us</td>
                            <td>Terms of use</td>
                        </tr>
                        <tr>
                            <td>Companies</td>
                            <td>FAQ’s</td>
                            <td>Privacy</td>
                        </tr>
                        <tr>
                            <td>Candidates</td>
                            <td>Contact</td>
                            <td>Conditions</td>
                        </tr>
                    </table>
                </div>
                <div className={Styles.newsletter}>
                    <p>Newsletter</p>

                    <div className={Styles.subscribeBox}>
                        <p>Join & get news regularly</p>

                        <div className={Styles.subscribeInput}>
                            <input type="email" placeholder='Enter your email' />
                            <button>Send</button>
                        </div>

                        <div class="social-icons">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-whatsapp"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>

                    </div>

                </div>
            </div>

            <div className={Styles.secondSection}>
                <div className={Styles.copyright}>
                    <p>Copyright &copy; 2022.Careers. all right reserved</p>
                </div>
                <div className={Styles.links}>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>);
}