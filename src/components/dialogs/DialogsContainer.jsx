import { connect } from "react-redux";
import { addMessageActionCreator,changeInMessageActionCreator } from "../../reducers/dialogsReducer";
import Dialogs from "./Dialogs";

let stateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage
    }
}
let dispatchToProps = (dispatch) =>{
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeInMessage: (textMessage) => {
            let action = changeInMessageActionCreator(textMessage);
            dispatch(action);
        }
    }
}
const DialogsContainer = connect(stateToProps,dispatchToProps)(Dialogs);
export default DialogsContainer;
