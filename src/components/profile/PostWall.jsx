import React from "react";
import css from "./postWall.module.css"
import Post from "./Post";
import {addPostActionCreator, draftPostActionCreator} from "../../redux/posts-reducer";


function PostWall (props){

   let getText = React.createRef();
    let show =()=> {
        props.addPost();
    }
    let draftText =()=>{
        let draft = draftPostActionCreator(getText.current.value)
        props.draftText(draft)
    }
    debugger
    return<div>
        <div className={css.body}>
            <div>
                <div className={css.form}>
                    <div className={css.textareaFix}>
                        <textarea ref={getText} onChange={draftText} value={props.draft} className={css.text}></textarea>
                    </div>
                    <button onClick={show} className={css.bottom}>Send Post</button>
                </div>
            </div>
            <div>
                {props.public.map((post)=><Post avatar={post.avatar} name={post.name} text={post.text}/>)}
            </div>
        </div>
    </div>
}

export default PostWall;