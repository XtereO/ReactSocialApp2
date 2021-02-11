import axios from "axios";

let instance=axios.create({
    withCredentials:true, 
    headers:{
        "API-Key":"535f3cfb-edbb-4698-99c5-57db5276ea88"
    },
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
})

export let addFriendPage={
    doFollow(id){
        return instance.delete("follow/"+id)
    },
    doUnFollow(id){
        return instance.post("follow/"+id)
    },
    requestFriends(page){
        return instance.get(`users?page=${page}`) 
    }
}

export let mainPage={
    getProfile(id){
        return instance.get("profile/"+id)
    },
    getMyProfile(){
        return instance.get("auth/me")
    },
    getStatus(id){
        return instance.get("profile/status/"+id)
    },
    setStatus(status){
        return instance.put("profile/status",{status:status})
    },
    setPhoto(photos){
        let formData=new FormData();
        formData.append("image",photos)

        return instance.put("profile/photo",formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    },
    setEditAccount(value){
        return instance.put("profile",value)
    }
}

export let loginPage={
    logIn(email,password,rememberMe=false,captcha){
        return instance.post("auth/login",{email,password,rememberMe,captcha})
    },
    logOut(){
        return instance.delete("auth/login")
    }
}

export let security={
    getCaptcha(){
        return instance.get("security/get-captcha-url")
    }
}