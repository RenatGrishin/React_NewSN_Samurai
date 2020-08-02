import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";

let mapStateToProps =(state)=>{
    return{
        dialogs: state.dialogsReducer
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        sendMSG :(id, text)=>{
            dispatch(sendMessageActionCreator(id, text))
        },
        draftMSG: (text)=>{dispatch(text)}
    }
}

//let AuthReducerComponent = withAuthRedirect(Dialogs)

let mapStateToPropsForReducer =(state)=>{
    return{
        isAuth: state.authReducer.isAuth
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    connect(mapStateToPropsForReducer),
    withAuthRedirect
)(Dialogs)

/*
AuthReducerComponent = connect(mapStateToPropsForReducer)(AuthReducerComponent)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthReducerComponent);

export default DialogsContainer;*/
