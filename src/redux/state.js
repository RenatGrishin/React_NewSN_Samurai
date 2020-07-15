import postsReducer from "./posts-reducer";
import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
        posts: {
            public: [
                {avatar: "URL Avatar", name: "Renat Grishin", text: "First post text"},
                {avatar: "URL Avatar", name: "Renat Grishin", text: "Second post text"}
            ],
            draft: ''
        },
        profilePage: {
            id: '1',
            name: 'Renat Grishin',
            status: 'My status in profile',
            photos: {
                small: 'Photo URL',
                large: "Large photo"
            }
        },
        dialogs: {
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
            ]
        },
        users: [
            {
                id: '1',
                name: 'Anya',
                status: 'z',
                photos: {
                    small: 'Photo URL',
                    large: "Large photo"
                },
                followed: true
            },
            {
                id: '2',
                name: 'Dima',
                status: 'hello world',
                photos: {
                    small: 'Photo URL',
                    large: "Large photo"
                },
                followed: false
            }
        ]
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this.rerenderReactDom = observer
    },
    rerenderReactDom(){
        console.log('')
    },
    dispatch(action){
        this._state.post = postsReducer(this._state.posts, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this.rerenderReactDom(this._state);
    }
}

export default store;