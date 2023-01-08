import styles from "./MyPost.module.css"

const MyPost = (props) => {
    return(
        <div className={styles.MyPost}>
            <span><img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatarka" /></span>
            <span className={styles.postText}>{props.message}</span>
            <div className={styles.likes}>
                likes: 
                {props.likes}
            </div>
            </div>
    )
}

export default MyPost;