import React from "react";
import * as axios from "axios";
import {connect} from "react-redux/es/alternate-renderers";
import ProfileInfo from "./ProfileInfo";
import {getStatus, getUserInfoTC, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {compose} from "redux";


class profileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserInfoTC(userId)
        this.props.getStatus(userId)
        /*axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)*/
        /*    profileAPI.getProfile(userId).then(response=>{
            debugger
            this.props.getUserInfo(response)
        })*/
    }

    render() {
        return <div>
            <ProfileInfo {...this.props}/>
        </div>
    }
}
let mapStateToProps =(state)=>{
    return{
        profilePage: state.profileReducer
    }
}

export default compose(
    connect(mapStateToProps,{getUserInfoTC, getStatus, updateStatus}),
    withRouter
)(profileContainer)