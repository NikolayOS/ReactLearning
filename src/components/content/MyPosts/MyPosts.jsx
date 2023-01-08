import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css"

const MyPosts = () => {
    return(
        <div className={styles.posts}>
        <div>My posts</div>
            <form className={styles.postsForm}>
                    <textarea type="text"  placeholder="New Post" className={styles.postInput}/>
                    <button className={styles.sendPost}>Send post</button>
            </form>
                <div>
                    <MyPost message = "Mi first post" likes={20}/>
                    <MyPost message = "Mi second post" likes={40}/>
                    <MyPost message = "Mi third post" likes={110}/>
                </div>
                    
                
            </div>
    )
}

export default MyPosts;