import React from "react";
import css from "./profileInfo.module.css"


class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    editStatus =()=>{
        this.setState({editMode:true, status: this.props.status})
    }
    setStatus =()=>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    statusOnChange =(e)=>{
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let a = this.props
        let b = this.props.state
        /*if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }*/
    }

    render() {
        return (
            <div>{
                !this.state.editMode
                    ? <div onDoubleClick={this.editStatus} className={css.status}>{this.props.status}</div>
                    : <textarea onChange={this.statusOnChange} autoFocus={true} onBlur={this.setStatus} className={css.statusEdit} value={this.state.status}></textarea>
            }</div>
        )
    }
}

export default ProfileStatus