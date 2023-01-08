import styles from "./SiteBar.module.css"
const SiteBar = () => {
    return(
        <ul className={styles.SiteBar}>
            <li><a href="http://localhost:3000/">Profile</a></li>
            <li><a href="http://localhost:3000/">Messages</a></li>
            <li><a href="http://localhost:3000/">News</a></li>
            <li><a href="http://localhost:3000/">Music</a></li>
            <li><a href="http://localhost:3000/">Settings</a></li>
        </ul>
    )
}

export default SiteBar;