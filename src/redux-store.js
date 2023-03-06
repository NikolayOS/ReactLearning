import { combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsList: sidebarReducer,
    findUsers: usersReducer,
});


let store = createStore(reducers);

export default store;