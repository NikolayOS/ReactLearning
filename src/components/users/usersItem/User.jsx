import styles from "../FindUsers.module.css"
import usersPhoto from "../../../imgForProject/usersPhoto.jpg"
import React from "react"
import { NavLink } from "react-router-dom"

class User extends React.Component {
    
    render(){
    return(
        <div className={styles.userElement}>
        <div className={styles.userElementLeftSide}>
        <div className={styles.userAva}>
            <NavLink to={"/profile/" + this.props.id}>
            <img src={this.props.photos.small ? this.props.photos.small : usersPhoto} alt=""/>
            </NavLink>
        </div>
        { this.props.followed ? <button onClick={()=>{this.props.unfollow(this.props.id)}} className={styles.followButton}>UnFollow</button> 
        : 
        <button onClick={()=>{this.props.follow(this.props.id)}} className={styles.followButton}>Follow</button>}
        </div>
        <div className={styles.userElementRightSide}>
            <div className={styles.userInfo}>
                <div className={styles.userName}>{this.props.name}</div>
                <div className={styles.userLocation}>{"props.location.city"},{"props.location.country"}</div>
            </div>
            <div className={styles.userText}>
                {this.props.status}
            </div>
        </div>
    </div>
    )
    }
}
export default User;