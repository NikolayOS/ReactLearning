import { NavLink } from "react-router-dom";
import Friends from "../friends/Friends";
import styles from "./SiteBar.module.css"
const SiteBar = (props) => {
    let activeStyle = {
        color: "red",
        textDecoration: "underline",
        };
        let unActiveStyle = {
            color: "blanchedalmond",
            textDecoration: "none"
            };
    return(
        <div className={styles.SiteBar}>
        <ul>
            <li><NavLink to="/profile" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Profile</NavLink></li>
            <li><NavLink to="/messages" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Messages</NavLink></li>
            <li><NavLink to="/news" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>News</NavLink></li>
            <li><NavLink to="/music" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Music</NavLink></li>
            <li><NavLink to="/settings" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Settings</NavLink></li>
        </ul>
        <Friends friends={props.friends.friends}/>
        </div>
    )
}

export default SiteBar;