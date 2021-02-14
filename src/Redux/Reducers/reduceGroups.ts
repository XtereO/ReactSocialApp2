

export type GroupType={
  name:string,
  discription:string,
  followers:number,
  img:string,
  way:string
}
let initialState={
    Property:{
        groupsData:[
            {name:"React",discription:"Discuss new technologies",followers:1303,img:"https://pbs.twimg.com/profile_images/812005554969255936/0_tpwlVv.jpg",way:"https://reactjs.org/"},
            {name:"JavaScript",discription:"New commands",followers:21008,img:"https://www.ascendtraining.com/wp-content/uploads/2015/06/javascript.png",way:"https://www.udemy.com/course/javascript_full/?couponCode=SPECIALOFFER&yclid=335011098404883206&utm_source=yandex-intl&utm_medium=udemyads&utm_campaign=YX-DSA_la.RU_cc.RU&utm_term=_._pl_none_._pd_lang%3Dru-ru_._ti_1107133_._kw__._&utm_content=_._ag_4164914331_._ad_0_._de_desktop_._lo_%d0%a1%d0%b0%d0%bd%d0%ba%d1%82-%d0%9f%d0%b5%d1%82%d0%b5%d1%80%d0%b1%d1%83%d1%80%d0%b3"},
            {name:"Bootstrap",discription:"New templates and design",followers:40812,img:"https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix.jpg",way:"https://bootstrap5.ru/"},
            {name:"Redux",discription:"FLUX and more",followers:1244,img:"https://kiral.co/wp-content/uploads/2019/12/logo-redux.jpg",way:"https://redux.js.org/"}
        ] as Array<GroupType>
    }
}

export type InitialStateType=typeof initialState

let reduceGroups=(state=initialState,action:any):InitialStateType=>{
    return state
}

export default reduceGroups
