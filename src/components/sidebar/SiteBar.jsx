import { NavLink } from "react-router-dom";
import styles from "./SiteBar.module.css"
const SiteBar = () => {
    let activeStyle = {
        color: "red",
        textDecoration: "underline",
        };
        let unActiveStyle = {
            color: "blanchedalmond",
            textDecoration: "none"
            };
    return(
        <ul className={styles.SiteBar}>
            <li><NavLink to="/profile" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Profile</NavLink></li>
            <li><NavLink to="/messages" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Messages</NavLink></li>
            <li><NavLink to="/news" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>News</NavLink></li>
            <li><NavLink to="/music" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Music</NavLink></li>
            <li><NavLink to="/settings" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}>Settings</NavLink></li>
        </ul>
    )
}

export default SiteBar;