import styles from "./Friends.module.css"
import FriendsItem from "./friendsItem/FriendsItem";

const Friends = (props) =>{
    const friends = props.friends.map((item,index) =><FriendsItem key={index} ava={item.ava} name={item.name} />)
    return(
        <div>
            <span className={styles.friendsTitle}>Friends</span>
            <div className={styles.friends}>
            {friends}
            </div>
        </div>
    )
}

export default Friends;