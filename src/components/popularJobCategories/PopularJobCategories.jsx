import Styles from './popularJobCategories.module.css'
import file from '../../assets/icons/file.svg'
import headphone from '../../assets/icons/headphone.svg'
import lock from '../../assets/icons/lock.svg'
import megaphone from '../../assets/icons/megaphone.svg'
import monitor from '../../assets/icons/monitor.svg'
import person from '../../assets/icons/person.svg'
 export default function PopularJobCategories() {
    return (<>
        <div className={Styles.categoriesContainer}>
            <div className={Styles.textContainer}>
                <h2>Popular Job Categories</h2>
                <p>2024 jobs live - 293 added today Explore the marketplace.</p>
            </div>

            <div className={Styles.cardsContainer}>
                <div className={Styles.card}>
                    <div className={Styles.textCard}>
                        <img src={megaphone} alt="icon" />
                        <div>
                            <p>Markting</p>
                            <p>10k+ Jobs</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.textCard}>
                        <img src={headphone} alt="icon" />
                        <div>
                            <p>Accounting / Finance</p>
                            <p>10k+ Jobs</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.textCard}>
                        <img src={person} alt="icon" />
                        <div>
                            <p>Human Resource</p>
                            <p>10k+ Jobs</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.textCard}>
                        <img src={lock} alt="icon" />
                        <div>
                            <p>Security Analyst</p>
                            <p>10k+ Jobs</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.textCard}>
                        <img src={monitor} alt="icon" />
                        <div>
                            <p>Management</p>
                            <p>10k+ Jobs</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.textCard}>
                        <img src={file} alt="icon" />
                        <div>
                            <p>Content Creator</p>
                            <p>10k+ Jobs</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className={Styles.allCategoriesBtn}>All Categories</button>
        </div>
    </>)
}