import React from "react";
import css from "./users.module.css"
import defAvatar from "../../files/img/AvatarLynx.jpg"
import {NavLink} from "react-router-dom";

function User(props) {
    let follow =(followed, id)=>{
        props.toggleFollowingProgress(true, id)
        if(followed){
            props.unfollowTC(id)
        }else{
            props.followTC(id)
            /*usersAPI.follow(id).then(response=>{
                debugger
                if(response.resultCode === 0){
                    props.toggleFollowingProgress(false, id)
                    props.unfollow(id)
                }
            })*/
        }
            /*axios.post('https://social-network.samuraijs.com/api/1.0/follow/'+id,{},{
                withCredentials: true,
                headers: {'API-KEY' : 'e394f194-d92a-4efc-9179-c4e1d7eb7a0c'}
            }).then(response=>{
                if(response.data.resultCode === 0){
                    props.toggleFollowingProgress(false, id)
                    props.unfollow(id)
                }else{
                    console.log(response.data.messages)
                }
            })*/
        }
    return<div className={css.userCard}>
        <h3>{props.name}</h3>
        <NavLink to={'/profile/'+props.id}>
            <img src={props.photos ? props.photos : defAvatar} />
        </NavLink>
        <div className={css.buttonArea}>
            <button disabled={props.followingProgress.some(id=> id === props.id)} onClick={()=>{
                follow(props.followed, props.id)}}>{props.followed ? "Unfollow " : "Follow"
            }</button>
        </div>
    </div>
}

export default User;