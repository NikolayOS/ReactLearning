import styles from "./Header.module.css"
const Header = () => {
    return(
    <header className={styles.myHeader}>
        <div className={styles.myHeaderLogo}>
            <img className={styles.myHeaderLogoImg} src="https://www.logodesign.net/images/home-page-logo-03.png" alt="logo" />
        </div>
    </header>
    )
}

export default Header;