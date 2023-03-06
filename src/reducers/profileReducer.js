const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "CHANGE-IN-POST";

const initialState = {
    posts: [
        {id: 1,post: "post1",likes: 33,ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
        {id: 2,post: "post2",likes: 3,ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
        {id: 3,post: "post3",likes: 55,ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
        ],
        newPostText:"some text in post",
};
const profileReducer = (state = initialState,action) => {
    switch(action.type){
        
        case ADD_POST:
    let newPost = {
        id: state.posts.length,
        post: state.newPostText,
        likes: state.newPostText.length,
        ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
    }
    return{
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
    };
        case CHANGE_IN_POST:
    return{
        ...state,
        newPostText: action.text
    };
    default:
        return state;
        }
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