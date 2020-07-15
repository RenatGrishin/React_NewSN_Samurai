import React from "react";
import User from "./User";
import css from "./users.module.css"

class Users extends React.Component{

    render() {
        let totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for(let i=1 ; i <= totalPages; i++){
            pages.push(i)
        }
        debugger
        return <div className={css.body}>
            <div className={css.usersPages}>{pages.map(pag=>(
                (pag == this.props.page)
                    ? <span className={css.pageSelected}>{pag} </span>
                    : <span onClick={()=>{this.props.selectPage(pag)}}>{pag} </span>
            ))}</div>
            {this.props.users.map(user=><User
                id={user.id}
                name={user.name}
                status={user.status}
                photos={user.photos.small}
                followed={user.followed}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />)}
        </div>
    }
}

export default Users