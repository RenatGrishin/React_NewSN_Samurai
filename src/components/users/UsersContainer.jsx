import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    selectUsersPagesActionCreator,
    toggleFollowingProgressActionCreator, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator,
} from "../../redux/users-reducer";
import Preloader from "../component/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../dialogs/Dialogs";
import {compose} from "redux";

class userContainer extends React.Component{
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.page, this.props.pageSize);
    }
    selectPage =(numberPage)=>{
        this.props.getUsersThunkCreator(numberPage, this.props.pageSize);
        /*this.props.isLoadedFalse()
        usersAPI.getNextUsers(numberPage).then(response=>{
            this.props.isLoadedTrue()
            this.props.selectUserPage(response, numberPage)
        })*/
    }
    render() {
        return<div>
                {!this.props.isLoaded ? <Preloader/> : console.log()}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                selectPage = {this.selectPage}
                page={this.props.page}
                users={this.props.users}
                followingProgress={this.props.followingProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followTC = {this.props.followTC}
                unfollowTC = {this.props.unfollowTC}
                isAuth = {this.props.isAuth}
            />
        </div>
    }
}

let mapStateToProps =(state)=>{
    return{
        users: state.usersReducer.users,
        page: state.usersReducer.page,
        totalUsersCount: state.usersReducer.totalUsersCount,
        pageSize: state.usersReducer.pageSize,
        isLoaded: state.usersReducer.isLoaded,
        followingProgress: state.usersReducer.followingProgress,
    }
}
/*let mapDispatchToProps =(dispatch)=>{
    return{
        follow:(id)=>{
            dispatch(userFollowActionCreator(id))
        },
        unfollow: (id)=>{
            dispatch(userUnfollowActionCreator(id))
        },
        getUsersInfo: (info)=>{
            dispatch(getUsersActionCreator(info))
        },
        selectUserPage: (info, number)=>{
            dispatch(selectUsersPagesActionCreator(info, number))
        },
        isLoadedTrue: ()=>{
            dispatch(isLoadedTrueActionCreator())
        },
        isLoadedFalse: ()=>{
            dispatch(isLoadedFalseActionCreator())
        }
    }
}*/

//let AuthReducerComponent = withAuthRedirect(userContainer)
let mapStateToPropsForRedirect =(state)=> {
    return{
        isAuth: state.authReducer.isAuth
    }
}
export default compose(
    connect(mapStateToProps,{
        selectUserPage: selectUsersPagesActionCreator,
        toggleFollowingProgress: toggleFollowingProgressActionCreator,
        getUsersThunkCreator: getUsersThunkCreator,
        followTC: followThunkCreator,
        unfollowTC: unfollowThunkCreator
    }),
    connect(mapStateToPropsForRedirect),
    withAuthRedirect
)(userContainer)
//AuthReducerComponent = connect(mapStateToPropsForRedirect)(AuthReducerComponent)


/*
const UsersContainer = connect(mapStateToProps,{
    selectUserPage: selectUsersPagesActionCreator,
    toggleFollowingProgress: toggleFollowingProgressActionCreator,
    getUsersThunkCreator: getUsersThunkCreator,
    followTC: followThunkCreator,
    unfollowTC: unfollowThunkCreator
})(AuthReducerComponent);

export default UsersContainer*/
