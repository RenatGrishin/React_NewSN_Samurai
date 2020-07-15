import React from "react";
import css from "./Post.module.css"
import defAvatar from "../../files/img/AvatarLynx.jpg"
import IMGsayStatysArrow from "../../files/img/SayStatysArrow.svg"


function Post(props) {
    return<div className={css.body}>
        <div className={css.avatar}>
            <img src={defAvatar} />
        </div>
        <h3 className={css.name}>{props.name}</h3>
        <div className={css.text}>
            <img src={IMGsayStatysArrow} />
            <div>{props.text}</div>
        </div>
    </div>
}

export default Post