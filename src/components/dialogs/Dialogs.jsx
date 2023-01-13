import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
    const dialogsData = [
        {id: 1,name: "Name1"},
        {id: 2,name: "Name2"},
        {id: 3,name: "Name3"},
        {id: 4,name: "Name4"},
        {id: 5,name: "Name5"},
        {id: 6,name: "Name6"}
    ];
    const MessagesData = [
        {id: 1,message: "message1"},
        {id: 2,message: "message2"},
        {id: 3,message: "message3"},
        {id: 4,message: "message4"}
    ];
return (
    <div className={styles.messagesContainer}>
    <div className={styles.dialogs}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
    </div>
    <div className={styles.messages}>
        <Message message={MessagesData[0].message}/>
        <Message message={MessagesData[1].message}/>
        <Message message={MessagesData[2].message}/>
        <Message message={MessagesData[3].message}/>
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
