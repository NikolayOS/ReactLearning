import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import React from "react";


const Dialogs = (props) => {
    const dialogs = props.messagesPage.dialogs.map((dialog,index) =>  <DialogItem key ={index} ava={dialog.ava} name={dialog.name} id={dialog.id}/>);
    const send = props.messagesPage.messagesSend.map((message,index) =>  <Message key ={index} message={message.message}/>);
    const receive = props.messagesPage.messagesReceive.map((message,index) =>  <Message key ={index} message={message.message}/>);
    const newTextInMessage = props.messagesPage.newMessageText;
    const refMessage = React.createRef();
    const addMessages = () => {
        props.addMessage();
    }
    function onMessageChange(){
        let textMessage = refMessage.current.value;
        props.changeInMessage(textMessage);
    }
return (
    <div className={styles.messagesContainer}>
    <div className={styles.dialogs}>
        {dialogs}
    </div>
    <div className={styles.send}>
        {send}
    </div>
    <div className={styles.receive}>
        {receive}
    </div>
    <div className={styles.addMessageArea}>
        <textarea className={styles.enterText} onChange={onMessageChange} ref={refMessage} type = "text" value={newTextInMessage} ></textarea>
        <button className={styles.addMessage} onClick={addMessages}>addMessage</button>
    </div>
    </div>
);
};
const DialogItem = (props) => {
    return (
        <div className={styles.dialog}><img className={styles.ava} src={props.ava} alt="" /><NavLink to={`/messages/${props.id}`}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
export default Dialogs;
