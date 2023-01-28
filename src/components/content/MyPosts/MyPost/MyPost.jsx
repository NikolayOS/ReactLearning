import styles from "./MyPost.module.css"

const MyPost = (props) => {
    return(
        <div className={styles.MyPost}>
            <span><img src={props.ava} alt="avatarka" /></span>
            <span className={styles.postText}>{props.message}</span>
            <div className={styles.likes}>
                likes: 
                {props.likes}
            </div>
            </div>
    )
}

export default MyPost;