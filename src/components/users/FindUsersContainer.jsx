import { connect } from "react-redux"
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../reducers/usersReducer"
import axios from "axios";
import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "./preloader/Preloader";



class FindUsersAPIComponent extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true)
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.toggleIsFetching(false)
    this.props.setUsers(response.data.items)
    this.props.setTotalUsersCount(response.data.totalCount);
    });
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
    axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
    .then(response => {
        this.props.toggleIsFetching(false)
    this.props.setUsers(response.data.items)})
    }
render(){
    return(
        <>
        {this.props.isFetching ? <Preloader/> : null}
        <FindUsers
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        />
        </>
    )
}
}

let stateToProps = (state) =>{
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching,
    }
}
// let dispatchToProps = (dispatch) =>{
//     return {
//         follow : (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow : (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers : (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage : (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount : (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

const FindUsersContainer = connect(stateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(FindUsersAPIComponent);

export default FindUsersContainer;