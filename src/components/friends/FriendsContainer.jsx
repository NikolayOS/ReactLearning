import { connect } from "react-redux";
import Friends from "./Friends";


let stateToProps = (state) =>{
    return {
        friends: state.friendsList.friends
    }
}
let dispatchToProps = (dispatch) =>{
    return {
        addMessage: () => {
        },
        changeInMessage: (text) => {
        }
    }
}
const FriendsContainer = connect(stateToProps,dispatchToProps)(Friends);
export default FriendsContainer;