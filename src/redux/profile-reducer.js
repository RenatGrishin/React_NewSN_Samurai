import {profileAPI} from "../api/api";

const GET_USER_INFO = 'GET_USER_INFO'
const SET_STATUS = 'SET_STATUS'

export const initalState = {
    userId: '0',
    fullName: 'Renat Grishin',
    aboutMe: 'My status in profile...',
    lookingForAJob: true,
    lookingForAJobDescription: "job",
    photos: {
        small: "",
        large: ""
    },
    contacts:{
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: ""
    },
    status: 'step'
}
const profileReducer =(state=initalState, action)=>{
    let copyState = {...state}
    switch(action.type){
        case GET_USER_INFO:
            copyState = {
                ...action.userInfo,
                photos: {...action.userInfo.photos},
                contacts: {...action.userInfo.contacts}
            }
            return copyState
        case SET_STATUS:
            copyState.status = action.newStatus
            return copyState
        default: return state
    }
}

export const getUserInfo =(info)=>({type: GET_USER_INFO, userInfo: info})
export const setStatus =(status)=>({type: SET_STATUS, newStatus: status})

export const getUserInfoTC =(userId)=>(dispatch)=>{
    profileAPI.getProfile(userId).then(response=> {
        dispatch(getUserInfo(response))
    })
}
export const getStatus =(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId).then(response=>{
        dispatch(setStatus(response.data))
    })
}
export const updateStatus =(status)=>(dispatch)=>{
    profileAPI.updateStatus(status).then(response=>{
        debugger
        if(response.data.resultCode === 0){
            dispatch(setStatus(response.data))
        }
    })
}

export default profileReducer