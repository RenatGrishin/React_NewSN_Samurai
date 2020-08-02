import React from "react";
import Header from "./Header";
import {setAuthTC, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.setAuthTC()
    }

    render() {
        return(
            <Header
                login={this.props.login}
            />
        )
    }
}

const mapStateToProps =(state)=>({
    login: state.authReducer.data.login
})
export default connect(mapStateToProps, {
    setAuthUserData, setAuthTC
})(HeaderContainer)