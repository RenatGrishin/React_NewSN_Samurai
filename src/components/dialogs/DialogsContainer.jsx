import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps =(state)=>{
    return{
        dialogs: state.dialogsReducer
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        sendMSG :(text)=>{
            dispatch(text)
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
