import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    const dialogs = props.dialogs.map((dialog,index) =>  <DialogItem key ={index} name={dialog.name} id={dialog.id}/>);
    const messages = props.messages.map((message,index) =>  <Message key ={index} message={message.message}/>);
return (
    <div className={styles.messagesContainer}>
    <div className={styles.dialogs}>
        {dialogs}
    </div>
    <div className={styles.messages}>
        {messages}
    </div>
    </div>
);
};
const DialogItem = (props) => {
    return (
        <div className={styles.dialog}><NavLink to={`/messages/${props.id}`}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
export default Dialogs;
