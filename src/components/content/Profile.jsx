import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {
    return(
        <div className={styles.contentBody}>
            <div className={styles.contentImg}>
                <img src="https://praguetouristinformation.com/wp-content/uploads/2020/12/Bezirk-1-Praha-1.jpg" alt="img" />
            </div>
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img src="https://www.zooplus.pl/magazyn/wp-content/uploads/2021/01/retro-mops-g%C5%82owa.jpg" alt="avatar" />
            </div>
            <div className={styles.profileInfo}>
                <h4>Nikolay O.</h4>
                <div>Date of birth: 12-12-12</div>
                <div>City: SOME</div>
                <div>Education: lsisdsods</div>
                <div>Web site: some@gmail.com</div>
            </div>
        </div>
        <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;