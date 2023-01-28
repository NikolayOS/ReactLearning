import styles from "./FriendsItem.module.css"

const FriendsItem = (props) =>{
    return(
        <div className={styles.friendsItem}>
            <img src={props.ava} alt="logo" />
            {props.name}
        </div>
    )
}

export default FriendsItem;