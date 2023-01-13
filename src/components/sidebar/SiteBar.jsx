import { NavLink } from "react-router-dom";
import styles from "./SiteBar.module.css"
const SiteBar = () => {
    return(
        <ul className={styles.SiteBar}>
            <li><NavLink to="/profile" className={styles.link}>Profile</NavLink></li>
            <li><NavLink to="/messages" className={styles.link}>Messages</NavLink></li>
            <li><NavLink to="/news" className={styles.link}>News</NavLink></li>
            <li><NavLink to="/music" className={styles.link}>Music</NavLink></li>
            <li><NavLink to="/settings" className={styles.link}>Settings</NavLink></li>
        </ul>
    )
}

export default SiteBar;