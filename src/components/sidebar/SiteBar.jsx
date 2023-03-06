import { NavLink } from "react-router-dom";
import FriendsContainer from "../friends/FriendsContainer";
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
            <li><NavLink to="/users" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Find Users</NavLink></li>
        </ul>
        <FriendsContainer/>
        </div>
    )
}

export default SiteBar;