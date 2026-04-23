import Styles from './hero.module.css';
import Card from '../assets/images/Card01.png';

export default function Hero() {
    return(<>
        <div className={Styles.heroContainer}>
            <div className={Styles.heroSection}>
                <div className={Styles.textContainer}>
                    <h1>The <span>#1</span> Job Board for Hiring or Find your next job in <span>Egypt</span></h1>
                    <p>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                </div>
                <div className={Styles.cardImgContainer}>
                    <img src={Card} alt="Hero illustration" />
                </div>
            </div>

            <div className={Styles.cardsContainer}>
                <div className={Styles.card}>
                    <h3>30k+</h3>
                    <h4>Job Seeker</h4>
                    <p>We always provide people a complete solution upon focused of any business</p>
                </div>

                <div className={Styles.card}>
                    <h3>10k+</h3>
                    <h4>Vacant jobs</h4>
                    <p>We always provide people a complete solution upon focused of any business</p>
                </div>

                <div className={Styles.card}>
                    <h3>20k+</h3>
                    <h4>Company</h4>
                    <p>We always provide people a complete solution upon focused of any business</p>
                </div>
            </div>
        </div>
    </>);
}