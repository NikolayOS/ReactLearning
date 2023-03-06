import styles from "./FindUsers.module.css"
import User from "./usersItem/User";
import React from "react";


const FindUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return(
    <div className={styles.wrap}>
        <div className={styles.title}>Users</div>
        <div className={styles.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.currentPage : styles.page } key={p}
                onClick={(e) => {props.onPageChanged(p)}}
                >{p}</span>
            })}
        </div>
        <div className={styles.container}>
        {props.users.map(u => <User 
            key={u.id} followed={u.followed} name={u.name} 
            status={u.status}  photos={u.photos} id={u.id}
            follow={props.follow} unfollow={props.unfollow}
            />)}
        </div>
    </div>
    )
}


// class FindUsers extends React.Component {
//     componentDidMount(){
//     axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//     .then(response => {
//     this.props.setUsers(response.data.items)
//     this.props.setTotalUsersCount(response.data.totalCount);
//     });
//     }
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber)
//     axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
//     .then(response => {
//     this.props.setUsers(response.data.items)})
//     }
// render(){
    
// }
// }

export default FindUsers;