import React from "react";
import css from "./header.module.css"
import {NavLink} from "react-router-dom";

function Header(props){
    return(
        <div className={css.header}>
            <div className={css.logo}>Logo</div>
            <div className={css.userPanel}>
                {props.login ? props.login : <NavLink to={'/login'}>LogIn</NavLink>}
            </div>
        </div>
    )
}

export default  Header;