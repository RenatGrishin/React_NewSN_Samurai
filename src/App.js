import React from 'react';
import css from "./App.module.css"
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/component/auth";

class App extends React.Component{
    componentDidMount() {
    }
    render() {
        return (
            <div className={css.main}>
                <div className={css.header}>
                    <HeaderContainer/>
                </div>
                <div className={css.sidebar}>
                    <Sidebar/>
                </div>
                <div className={css.pages}>
                    <Route path="/profile/:userId" render={()=><ProfileContainer />}/>
                    <Route path="/dialogs" render={()=><DialogsContainer />} />
                    <Route path="/users" render={()=><UsersContainer/>} />
                    <Route path="/login" render={()=><Login/>} />
                </div>
            </div>
        )
    }
}

/*const App = (props) => {
    debugger
  return (
    <div className={css.main}>
        <div className={css.header}>
            <HeaderContainer/>
        </div>
        <div className={css.sidebar}>
            <Sidebar/>
        </div>
        <div className={css.pages}>
            <Route path="/profile/:userId" render={()=><ProfileContainer />}/>
            <Route path="/dialogs" render={()=><DialogsContainer />} />
            <Route path="/users" render={()=><UsersContainer/>} />
            <Route path="/login" render={()=><Login/>} />
        </div>
    </div>
  )
}*/

export default App;
