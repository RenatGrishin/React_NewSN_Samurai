import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm =(props)=>{
    return(
            <form onSubmit={props.handleSubmit}>
                <Field name='login' component='input' type='text'></Field> – Login<br/>
                <Field name='password' component='input' type='text'></Field> – Password<br/>
                <Field name='login' component='input' type='checkbox'></Field> – remember me <br/>
                <button>LogIn</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login =(props)=>{
    const onSubmit = (formData) =>{
        debugger
        console.log(formData)
    }
    return <div>
        <h1>LogIn</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

/*class Login extends Component{
    render() {
        debugger
        const onSubmit = (formData) =>{
            console.log(formData)
        }
        return(<div>
            Loooogiiiin
            <form onSubmit={onSubmit}>
                <Field name='title' component='input' type='text'></Field>
                <button type='button'>send</button>
            </form>
        </div>)
    }
}*/

//Login = reduxForm({form: 'post'})(Login)

export default Login;