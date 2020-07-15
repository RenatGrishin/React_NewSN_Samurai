const SEND_MESSAGE = 'SEND-MESSAGE'
const DRAFT_MESSAGE = 'DRAFT-MESSAGE'

let initialState = {
    friends: [
        {userId: 1, name: "Alexey"},
        {userId: 2, name: "Inna"},
        {userId: 3, name: "Jim"}
    ],
    messages: [
        {id: 1, userId: 1, mess: 'Hi'},
        {id: 2, userId: 1, mess: 'How are you?'},
        {id: 3, userId: 1, mess: 'Did you see new video?'},
        {id: 4, userId: 2, mess: 'OOOONEEE'},
        {id: 5, userId: 2, mess: 'TWOOOOOO'}
    ],
    draft: [
        {id: 1, userId: 1, draftMess: 'write message'},
        {id: 2, userId: 2, draftMess: 'test'},
        {id: 3, userId: 3, draftMess: 'draft text'}
    ]
}

const dialogsReducer =(state=initialState, action)=>{
    let stateCopy
    switch (action.type) {
        case SEND_MESSAGE:
            let newMess = {
                id: 0,
                userId: action.id,
                mess: action.text
            }
            stateCopy = {
                ...state,
                messages: {...state.messages}
            }
            stateCopy.messages = [...state.messages, newMess]
            return stateCopy
        case DRAFT_MESSAGE:
            stateCopy = {
                ...state
            }
            for(let i=0; i<state.draft; i++){  // копируем каждый черновик
                stateCopy.draft.push(state.draft[i])
            }
            stateCopy.draft.map(dr=>{
                if(dr.userId == action.id){
                    dr.draftMess = action.text
                }
            })
            return stateCopy
        default: return state
    }
}

export let sendMessageActionCreator =(userId, text)=>{
    return{type: SEND_MESSAGE, id: userId, text: text}
}
export let draftMessageActionCreator =(id, text)=>{
    return{type: DRAFT_MESSAGE, id: id, text: text}
}

export default dialogsReducer