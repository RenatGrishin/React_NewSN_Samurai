import React from "react";
import defAvatar from "../../files/img/AvatarLynx.jpg"
import IMGsayStatysArrow from "../../files/img/SayStatysArrow.svg"
import css from "./profileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    return <div className={css.body}>
            <div className={css.ava}>
                <img src={props.profilePage.photos.large ? props.profilePage.photos.large : defAvatar} className={css.avatar}/>
            </div>
            <div className={css.nam}>
                <h2 className={css.name}>{props.profilePage.fullName}</h2>
            </div>
            <div className={css.say}>
                <img src={IMGsayStatysArrow} className={css.statusArray} />
                <ProfileStatus status={props.profilePage.status} updateStatus={props.updateStatus} />
            </div>
            <ul className={css.con}>
                <li><span>E-Mail: </span><a href="#">cynvox@gmail.com</a></li>
                <li><span>GitHub: </span><a href="#">RenatGrishin</a></li>
                <li><span>Web site: </span><a href="#">renatgrishin.ru</a></li>
            </ul>
        </div>
}

export default ProfileInfo;