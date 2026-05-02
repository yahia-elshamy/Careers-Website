import Styles from './jobsSuitsYou.module.css'
import Card from '../../assets/images/card02.png'
import Correct from '../../assets/icons/correctMark.png'

export default function JobsSuitsYou() {
  return (<>
    <div className={Styles.mainContainer}>
        <div className={Styles.imgContainer}>
            <img src={Card} alt="Styling card" />
        </div>

        <div className={Styles.subContainer}>
            <div className={Styles.textContainer}>
                <h2>Millions of Jobs. Find the one that suits you.</h2>
                <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
            </div>
            <div className={Styles.checkBullets}>
                <ul>
                    <li><img src={Correct} alt="correct icon" /><p>Bring to the table win-win survival</p></li>
                    <li><img src={Correct} alt="correct icon" /><p>Capitalize on low hanging fruit to identify</p></li>
                    <li><img src={Correct} alt="correct icon" /><p>But I must explain to you how all this</p></li>
                </ul>
            </div>
            <button className={Styles.startedBtn}>Get Started</button>
        </div>
    </div>
  </>)
}
