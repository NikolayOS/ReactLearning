const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_IN_MESSAGE = "CHANGE-IN-MESSAGE";


const dialogsReducer = (state,action) => {
    switch(action.type){
    case ADD_MESSAGE:
        let newMessage = {
            id: state.messagesSend.length,
            message: state.newMessageText
        }
        state.messagesSend.push(newMessage);
        state.newMessageText = "";
        break;
    case CHANGE_IN_MESSAGE:
        state.newMessageText = action.text;
        break;
    }
    return state;
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