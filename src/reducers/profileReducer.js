const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "CHANGE-IN-POST";

const profileReducer = (state,action) => {
    switch(action.type){
        
        case ADD_POST:
    let newPost = {
        id: state.posts.length,
        post: state.newPostText,
        likes: state.newPostText.length,
        ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
    }
    state.posts.push(newPost);
    state.newPostText = "";
    break;
        case CHANGE_IN_POST:
        state.newPostText = action.text;
    break;
            }
    return state;
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const changeInPostActionCreator = (text) => {
    return {
        type: CHANGE_IN_POST,
        text: text
    }
}

export default profileReducer;