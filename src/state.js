import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);
        this._state.friendsList = sidebarReducer(this._state.friendsList,action);
        this._callSubscriber(this._state);
    }
}

export default store;