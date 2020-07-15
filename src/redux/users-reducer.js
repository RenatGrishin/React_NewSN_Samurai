import {usersAPI} from "../api/api";

const USER_FOLLOW = 'USER_FOLLOW';
const USER_UNFOLLOW = 'USER_UNFOLLOW';
const GET_USERS = 'GET_USERS';
const SELECT_USERS_PAGES = 'SELECT_USERS_PAGES';
const IS_LOADED = 'IS_LOADED';
const IS_LOADED_FALSE = 'IS_LOADED_FALSE';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

export const  initialState = {
    users: [
        {id: '1',
            name: 'Inna Davidova',
            status: 'statuuuuuuuusssss',
            photos: {
                small: 'Photo URL',
                large: "Large photo"
            },
            followed: true
        },
        {id: '2',
            name: 'Vasily Galperov',
            status: 'Stop Game Ru',
            photos: {
                small: 'Photo URL',
                large: "Large photo"
            },
            followed: false
        }
    ],
    pageSize: 12,
    page: 1,
    totalUsersCount: 36,
    isLoaded: false,
    followingProgress: []
}
const usersReducer =(state=initialState, action)=>{
    let stateCopy = {...state}
    switch (action.type) {
        case USER_FOLLOW:
            stateCopy.users = [...state.users.map(fri =>{
                if(fri.id == action.userId){
                    return{
                        ...fri,
                        followed: false
                    }
                }else{return {...fri}}
                })]
                return stateCopy
        case USER_UNFOLLOW:
            stateCopy.users = [...state.users.map(fri=>{
                if(fri.id == action.userId){
                    return {
                        ...fri,
                        followed: true
                    }
                }else{
                    return{...fri}
                }
            })]
            return stateCopy
        case GET_USERS:
            stateCopy.users = [...action.usersInfo.items];
            stateCopy.totalUsersCount = action.usersInfo.totalCount;
            return stateCopy
        case SELECT_USERS_PAGES:
            stateCopy.page = action.usersPage
            stateCopy.users = [...action.usersInfo.items];
            stateCopy.totalUsersCount = action.usersInfo.totalCount;
            return stateCopy
        case IS_LOADED:
            if(action.load){
                stateCopy.isLoaded = true;
            }else{
                stateCopy.isLoaded = false;
            }
            return stateCopy
        case IS_LOADED_FALSE:
            stateCopy.isLoaded = false;
            return stateCopy
        case SET_FOLLOWING_PROGRESS:
            stateCopy.followingProgress = [...state.followingProgress]
            if(action.isFetching){
                stateCopy.followingProgress.push(action.userId)
            }else{
                stateCopy.followingProgress = [...stateCopy.followingProgress.filter(id=> id != action.userId)]
            }
            console.log(stateCopy)
            return stateCopy
        default: return state
    }
}

export const userFollowActionCreator =(id)=> ({type: USER_FOLLOW, userId: id})
export const userUnfollowActionCreator =(id)=>({type: USER_UNFOLLOW, userId: id})
export const getUsersActionCreator =(info)=>({type: GET_USERS, usersInfo: info})
export const selectUsersPagesActionCreator =(info, number)=>({
    type: SELECT_USERS_PAGES,
    usersInfo: info,
    usersPage: number})
export const isLoadedActionCreator =(load)=>({type: IS_LOADED, load:load})
export const toggleFollowingProgressActionCreator =(isFetching, userId)=>({type: SET_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(isLoadedActionCreator(false));
        usersAPI.getUsers(page, pageSize).then(response=> {
            dispatch(isLoadedActionCreator(true));
            dispatch(getUsersActionCreator(response))
        })
    }
}
export const followThunkCreator =(id)=> {
    return (dispatch)=>{
        usersAPI.follow(id).then(response=>{
            if(response.resultCode === 0){
                dispatch(toggleFollowingProgressActionCreator(false, id))
                dispatch(userUnfollowActionCreator(id))
            }
        })
    }
}
export const unfollowThunkCreator =(id)=>{
    return(dispatch)=>{
        usersAPI.unfollow(id).then(response=>{
            if(response.resultCode === 0){
                dispatch(toggleFollowingProgressActionCreator(false, id))
                dispatch(userFollowActionCreator(id))
            }
        })
    }
}

export default usersReducer;