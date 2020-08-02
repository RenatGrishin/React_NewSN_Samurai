import {profileAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export const  initialState = {
    data:{
        id: null,
        email: null,
        login: null
    },
    resultCode: 0,
    messages: [],
    isAuth: false
}
const authReducer =(state=initialState, action)=>{
    let stateCopy;
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = state
            stateCopy.data = {...action.data}
            stateCopy.resultCode = 1
            stateCopy.isAuth = true
            return stateCopy
        default: return state
    }
}

export const setAuthUserData =(email, userId, login)=> ({type: SET_USER_DATA, data:{email, userId, login}})

export const setAuthTC =()=>(dispatch)=>{
    profileAPI.getAuthMe().then(response=>{
        if(response.resultCode === 0){
            let {email, id, login} = response.data
            dispatch(setAuthUserData(email, id, login))
        }
    })
}

export default authReducer;