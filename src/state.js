const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_IN_POST = "CHANGE-IN-POST";
const CHANGE_IN_MESSAGE = "CHANGE-IN-MESSAGE";


let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1,post: "post1",likes: 33,ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 2,post: "post2",likes: 3,ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 3,post: "post3",likes: 55,ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                ],
                newPostText:"some text in post",
        },
        messagesPage:{
            dialogs: [
                {id: 1,name: "Name1",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 2,name: "Name2",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 3,name: "Name3",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 4,name: "Name4",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 5,name: "Name5",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 6,name: "Name6",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"}
            ],
            messagesSend: [
            {id: 1,message: "messagesSend1"},
            {id: 2,message: "messagesSend2"},
            {id: 3,message: "messagesSend3"},
            {id: 4,message: "messagesSend5"},
            ],
            messagesReceive: [
            {id: 1,message: "messagesReceive1"},
            {id: 2,message: "messagesReceive2"},
            {id: 3,message: "messagesReceive3"},
            {id: 4,message: "messagesReceive4"},
            ],
            newMessageText:"some text in message",
        },
        friendsList:{
            friends:[
                {id: 1,name: "friend1",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 2,name: "friend2",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
                {id: 3,name: "friend3",ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"},
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("rend func");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch(action.type){
            case ADD_POST:
                let newPost = {
                    id: this._state.profilePage.posts.length,
                    post: this._state.profilePage.newPostText,
                    likes: this._state.profilePage.newPostText.length,
                    ava: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state)
                break;
            case ADD_MESSAGE:
                let newMessage = {
                    id: this._state.messagesPage.messagesSend.length,
                    message:this._state.messagesPage.newMessageText
                }
                this._state.messagesPage.messagesSend.push(newMessage);
                this._state.messagesPage.newMessageText = "";
                this._callSubscriber(this._state);
                break;
            case CHANGE_IN_POST:
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;
            case CHANGE_IN_MESSAGE:
                this._state.messagesPage.newMessageText = action.text;
                this._callSubscriber(this._state);
                break;
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const changeInPostActionCreator = (text) => {
    return {
        type: CHANGE_IN_POST,
        text: text
    }
}
export const changeInMessageActionCreator = (text) => {
    return {
        type: CHANGE_IN_MESSAGE,
        text: text
    }
}
export default store;