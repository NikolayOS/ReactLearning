import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css"

const MyPosts = () => {
        const postsData = [
            {id: 1,post: "post1",likes: 33},
            {id: 2,post: "post2",likes: 3},
            {id: 3,post: "post3",likes: 55},
        ];
    return(
        <div className={styles.posts}>
        <div>My posts</div>
            <form className={styles.postsForm}>
                    <textarea type="text"  placeholder="New Post" className={styles.postInput}/>
                    <button className={styles.sendPost}>Send post</button>
            </form>
                <div>
                    <MyPost message = {postsData[0].post} likes={postsData[0].likes}/>
                    <MyPost message = {postsData[1].post} likes={postsData[1].likes}/>
                    <MyPost message = {postsData[2].post} likes={postsData[2].likes}/>
                </div>
                    
                
            </div>
    )
}

export default MyPosts;