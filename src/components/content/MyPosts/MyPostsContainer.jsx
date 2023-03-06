import { connect } from "react-redux";
import { addPostActionCreator,changeInPostActionCreator } from "../../../reducers/profileReducer";
import MyPosts from "../MyPosts/MyPosts";

let stateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let dispatchToProps = (dispatch) =>{
    return {
        addPostItem: () => {
            dispatch(addPostActionCreator());
        },
        changeInPost: (text) => {
            let action = changeInPostActionCreator(text);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(stateToProps,dispatchToProps)(MyPosts);
export default MyPostsContainer;