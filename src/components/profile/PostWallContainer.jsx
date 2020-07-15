import React from "react";
import {addPostActionCreator} from "../../redux/posts-reducer";
import PostWall from "./PostWall";
import {connect} from "react-redux";


/*function PostWallContainer (props){
    return <ContextValue.Consumer>
        {(store)=>{
            let addPost =()=> {
                let add = addPostActionCreator()
                store.dispatch(add)
            }
            let draftText =(text)=>{
                store.dispatch(text)
            }
            return<PostWall
                addPost={addPost}
                draftText={draftText}
                public={store.getState().postsReducer.posts.public}
                draft={store.getState().postsReducer.posts.draft}
            />
        }

        }
    </ContextValue.Consumer>
}*/

let mapStateToProps =(state)=>{
    debugger
    return{
        public: state.postsReducer.public,
        draft: state.postsReducer.draft
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        draftText: (text)=>{
            dispatch(text)
        }
    }
}
const PostWallContainer = connect(mapStateToProps, mapDispatchToProps)(PostWall);

export default PostWallContainer;