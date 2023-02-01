import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css"
import React from "react";
import store from "../../../state";
import { addPostActionCreator,changeInPostActionCreator } from "../../../reducers/profileReducer";

const MyPosts = (props) => {
        const posts = props.posts.posts.map((post,index) => 
        <MyPost key ={index} message = {post.post} likes={post.likes} ava={post.ava}/>)
        const newPostElement = React.createRef();
        const newTextInPost = props.posts.newPostText;
        const addPostItem = () => {
            store.dispatch(addPostActionCreator());
        }
        function changeInPosts(){
            let text = newPostElement.current.value;
            props.dispatch(changeInPostActionCreator(text));
        }
    return(
        <div className={styles.posts}>
        <div>My posts</div>
            <form className={styles.postsForm} onSubmit={(event) => { event.preventDefault()}}>
                    <textarea value={newTextInPost} onChange={changeInPosts} ref={newPostElement} type="text"  placeholder="New Post" className={styles.postInput}/>
                    <button  onClick={addPostItem} className={styles.sendPost}>Send post</button>
            </form>
                <div>
                    {posts}
                </div>
                    
                
            </div>
    )
}

export default MyPosts;