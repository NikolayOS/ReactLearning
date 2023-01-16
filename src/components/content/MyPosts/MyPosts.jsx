import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css"

const MyPosts = (props) => {
        const posts = props.posts.map((post,index) => <MyPost key ={index} message = {post.post} likes={post.likes}/>)
    return(
        <div className={styles.posts}>
        <div>My posts</div>
            <form className={styles.postsForm}>
                    <textarea type="text"  placeholder="New Post" className={styles.postInput}/>
                    <button className={styles.sendPost}>Send post</button>
            </form>
                <div>
                    {posts}
                </div>
                    
                
            </div>
    )
}

export default MyPosts;