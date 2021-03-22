import axios from "axios";
import { AccountType } from "../Types/types";

let instance=axios.create({
    withCredentials:true, 
    headers:{
        "API-Key":"535f3cfb-edbb-4698-99c5-57db5276ea88"
    },
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
})

export enum ResultCode {
    Success=0,
    Error=1
}
export enum ResultCodeWithCapthca {
    Captha=10
}

type DoFollowType={
    resultCode:ResultCode
    messages:Array<string>
    data:any
}
type DoUnFollowType={
    resultCode: ResultCode
    messages:Array<string>
    data: any
}
type ItemType={
    name:string,
    id: number
    photos: {
        small: null | string,
        large: null | string
    },
    status: string | null
    followed: boolean
}
type RequestFriendsType={
    totalCount:number
    items:Array<ItemType>
}
export let addFriendPage={
    doFollow(id:number){
        return instance.delete<DoFollowType>("follow/"+id)
    },
    doUnFollow(id:number){
        return instance.post<DoUnFollowType>("follow/"+id)
    },
    requestFriends(page?:number,term?:string){
        return instance.get<RequestFriendsType>(`users?
        page=${page}&term=${term}&friend=false`) 
    },
    requestRealFriends(term?:string){
        return instance.get<RequestFriendsType>(`users?friend=true&term=${term}`)
    }
}

type GetProfileType=AccountType
type GetMyProfileType={
    data: {id: number,email:string,login:string}
    resultCode:ResultCode
    messages:Array<string>
}
type SetStatusType={
    resultCode: ResultCode
    messages: Array<string>,
    data:any
}
type SetPhotoType={
    resultCode:ResultCode
    messages:Array<string>
    data:{
        photos:{
            small:string,
            large:string
        }
    } | any
}
type SetEditAccountType={
    resultCode:ResultCode
    messages:Array<string>,
    data:any
}
export let mainPage={
    getProfile(id:number){
        return instance.get<GetProfileType>("profile/"+id)
    },
    getMyProfile(){
        return instance.get<GetMyProfileType>("auth/me")
    },
    getStatus(id:number){
        return instance.get("profile/status/"+id) //Here successfull-always
    },
    setStatus(status:string){
        return instance.put<SetStatusType>("profile/status",{status:status})
    },
    setPhoto(photos:any){
        let formData=new FormData();
        formData.append("image",photos)

        return instance.put<SetPhotoType>("profile/photo",formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    },
    setEditAccount(value:AccountType){
        return instance.put<SetEditAccountType>("profile",value)
    }
}

type logInType={
    resultCode:ResultCode | ResultCodeWithCapthca
    messages:Array<string>
    data:any
}
type logOutType={
    resultCode:ResultCode
    messages:Array<string>
    data:any
}
export let loginPage={
    logIn(email:string,password:string,rememberMe=false,captcha:null | string){
        return instance.post<logInType>("auth/login",{email,password,rememberMe,captcha})
    },
    logOut(){
        return instance.delete<logOutType>("auth/login")
    }
}

type GetCaptchaType={url:string}
export let security={
    getCaptcha(){
        return instance.get<GetCaptchaType>("security/get-captcha-url")
    }
}