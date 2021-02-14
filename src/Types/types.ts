export type ContactsType={
  github:string | null
  vk:string | null
  facebook:string | null
  instagram:string | null
  twitter:string | null
  website: string | null
  youtube:string | null
  mainLink:string | null
}
export type AccountType={
  userId?:null | number
  photos:PhotosType
  lookingForAJob:boolean | null
  lookingForAJobDescription:string | null
  fullName:string | null
  contacts:ContactsType | null
}
export type DataType={
  login:null | string,
  email:null | string,
  id:null | number
}
export type PhotosType={
  large:string | null
  litle:string | null
}
export type AudioType={
  name:string,
  compositor:string,
  asrc:string,
  id:number,
  img:string
}
export type VideoType ={
    name:string | null,
    compositor:string | null,
    vsrc:string | null,
    id:number
}
