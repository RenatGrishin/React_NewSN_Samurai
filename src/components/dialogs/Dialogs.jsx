import React from "react";
import {NavLink, Redirect, Route} from "react-router-dom";
import css from "./dialogs.module.css"
import {draftMessageActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Login from "../component/auth";

function Dialogs (props) {
    let getRef = React.createRef();
    const send =(id)=>{
        let sendMessage = sendMessageActionCreator(id, getRef.current.value);
        props.sendMSG(sendMessage)
    }
    const draft =(id)=>{
        let sendDraft = draftMessageActionCreator(id, getRef.current.value)
        props.draftMSG(sendDraft)
    }

    return <div className={css.body}>
        <ul className={css.friends}>
            {props.dialogs.friends.map(fr=><li><NavLink to={`/dialogs/${fr.userId}`}>{fr.name}</NavLink></li>)}
        </ul>

        <div className={css.messages}>
            {props.dialogs.messages.map(di=>
                <div>
                    <Route path={`/dialogs/${di.userId}`} render={
                    ()=><p>{di.mess}</p>
                }>
                </Route>
                </div>)
            }
            <div className={css.textSend}>
                {props.dialogs.draft.map(dr=><Route path={`/dialogs/${dr.userId}`} render={
                    ()=><div>
                        <textarea onChange={()=>{draft(dr.userId)}}
                                  value={dr.draftMess}
                                  className={css.textMessage}
                                  ref={getRef}></textarea>
                        <button onClick={()=>{send(dr.userId)}} className={css.bottom}>Send message</button>
                    </div>
                } />
                    )}
            </div>
        </div>
    </div>
}

export default Dialogs;