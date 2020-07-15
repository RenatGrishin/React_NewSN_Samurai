const ADD_POST = 'ADD-POST';
const DRAFT_POST = 'DRAFT-POST'

let initialState = {
    public: [
        {avatar: "URL Avatar", name: "Renat Grishin", text: "First post text"},
        {avatar: "URL Avatar", name: "Renat Grishin", text: "Second post text"}
    ],
    draft: ''
}

const postsReducer =(state=initialState, action)=>{
    let stateCopy
    switch (action.type) {
        case ADD_POST:
            let add = {
                avatar: "New URL Avatar",
                name: "Renat Grishin",
                text: state.draft
            }
            stateCopy = {
                ...state,
                public: {...state.public}
            }
            stateCopy.draft = ''
            stateCopy.public = [...state.public, add]
            return stateCopy
        case DRAFT_POST:
            stateCopy = {...state}
            stateCopy.draft = action.text
            return stateCopy
        default: return state
    }
}

export let addPostActionCreator =()=>{
    return{type: ADD_POST}
}
export let draftPostActionCreator =(text)=>{
    return{type: DRAFT_POST, text: text}
}

export default postsReducer;