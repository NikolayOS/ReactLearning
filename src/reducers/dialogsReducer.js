const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_IN_MESSAGE = "CHANGE-IN-MESSAGE";

const initialState = {
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
}

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
    case ADD_MESSAGE:
        let newMessage = {
            id: state.messagesSend.length,
            message: state.newMessageText
        }
        
        return {
            ...state,
            messagesSend: [...state.messagesSend, newMessage],
            newMessageText: "",
        };
    
    case CHANGE_IN_MESSAGE:
        return {
            ...state,
            newMessageText: action.text,
        };
        default: 
    return state;
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const changeInMessageActionCreator = (text) => {
    return {
        type: CHANGE_IN_MESSAGE,
        text: text
    }
}
export default dialogsReducer;