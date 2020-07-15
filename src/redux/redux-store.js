import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducer = combineReducers({postsReducer, dialogsReducer, profileReducer, usersReducer, authReducer})
let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;