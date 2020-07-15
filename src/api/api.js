import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : 'e394f194-d92a-4efc-9179-c4e1d7eb7a0c'}
})

export const usersAPI = {
    getUsers(setPage=1, setCount=12){
        return instance.get(`users?page=${setPage}&count=${setCount}`).then(response =>{return response.data})
    },
    follow(id) {
        return instance.post('follow/' + id).then(response => {return response.data})
    },
    unfollow(id) {
        return instance.delete('follow/' + id).then(response => {return response.data})
    }
}
export const profileAPI = {
    getAuthMe(){
        return instance.get('auth/me').then(response=>{
            return response.data})
    },
    getProfile(id){
        return instance.get('profile/'+id).then(response=>{return response.data})
    },
    getStatus(id){
        return instance.get('profile/status/' + id)
    },
    updateStatus(status){
        return instance.put('profile/status/', {status: status}).then(response=>{return response.data})
    }
}

