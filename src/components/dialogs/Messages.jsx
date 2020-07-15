import React from "react";
import css from "./dialogs.module.css"
import {draftPostActionCreator} from "../../redux/state";

let Messages =(props)=>{
    let getRef = React.createRef()

    let draft =()=>{
        //let act = draftPostActionCreator(getRef.current.value, props.info.messId)
        //props.dispatch(act)
    }

    debugger
    return<div>
        <div>
            {props.mess}
        </div>
        <div>
            <textarea onChange={draft} className={css.textMessage} value={props.draft} ref={getRef}></textarea>
            <button className={css.bottom}>Send message</button>
        </div>
    </div>
};

export default Messages