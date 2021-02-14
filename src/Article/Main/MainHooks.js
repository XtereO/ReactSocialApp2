import Post from "./Post";
import Loader from "../../Loader";
import React,{useState,useEffect} from "react";
import {Field,reduxForm} from "redux-form"
import Textarea from "../../Bricks/Textarea";
import { requiredField,maxLengthCreator } from "../../Validates/ValidateForText";
import {NavLink} from "react-router-dom"

let maxLength=maxLengthCreator(100000)

let Main=(props)=>{

    let userId=props.match.params.userId

    useEffect(()=>{
        if(!userId){
            userId=props.myId
        }
        props.setAccountThunk(userId)
        props.getStatusThunk(userId)
        return()=>{
            props.setAccount(null)
        }
    },[])

    let isMyPage=(!userId)

    let [isEditMode,setMode] = useState(false)

    let toActive=()=>{
        setMode(true)
    }
    let toOff=()=>{
        setMode(false)
        props.setStatusThunk(props.status)
    }

    if(!props.Account){
        return <Loader />
    }

    let posts=props.posts
    if(posts.length!=0){
        posts =posts.map(e=>{
            return <Post message={e.message} img={e.img}
                name={e.name} doLike={props.doLike}
                like={e.like} ableLike={e.ableLike}
                deletePost={props.deletePost}/>
        })
    }

    let changeStatus=(e)=>{
        props.changeStatus(e.target.value)
    }

    let name=props.Account.fullName;
    let img=props.Account.photos.large;
    if (!img){
        img="https://aachibilyaev.com/upload/iblock/c97/c970fbccb33a1923f4af631366566199.png"
    }

    let doPost=(value)=>{
        props.doPost(value.text)
    }
    return<div>
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img className="img w-100 rounded" src={img} />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <h1 className="Link my-2">{name}
                    <div className="right">
                        {isMyPage &&
                        <button className="btn btn-primary">
                            <NavLink className="text-light Link" to="Edit">
                                Edit Profile
                            </NavLink>
                        </button>
                        }
                    </div>
                </h1>
                    <div className="d-flex my-2">
                        Status:
                        {isMyPage ?
                            isEditMode ?
                            <div className="d-flex">
                                <input autoFocus={true}  onBlur={toOff} onChange={changeStatus}
                                className="form-control" value={props.status}/>
                                <button onClick={toOff} className="btn btn-success right">
                                    \/
                                </button>
                            </div>
                            :
                            <span onDoubleClick={toActive}>
                                {!props.status?
                                "click to change status"
                                :
                                props.status
                                }
                            </span>
                        :
                            props.Account.aboutMe
                        }
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item d-flex">
                            looking for a job:{props.Account.lookingForAJob ? " Yes " : "No"}
                        </li>
                        <li className="list-group-item d-flex">
                            Description job:{props.Account.descriptionJob ? props.Account.descriptionJob : "I dont know"}
                        </li>
                        <li className="list-group-item d-flex">
                            About me:{props.Account.aboutMe ? props.Account.aboutMe : "Just no name)"}
                        </li>
                        <li className="list-group-item">
                            <details>
                                <summary>
                                    Contacts
                                </summary>
                                <ul className="list-group">
                            {props.Account.contacts && Object.keys(props.Account.contacts).map(key=>{
                                return<li className="list-group-item" key={key}>{key}:
                                <a className="Link" target="_blank" href={props.Account.contacts[key]}>
                                {props.Account.contacts[key]}</a></li>
                            })}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="card mt-2 mb-2">
            <MainReduxForm onSubmit={doPost}/>
        </div>
        <div>
          {posts}
        </div>
    </div>

}

let MainForm=(props)=>{ 
    return<form onSubmit={props.handleSubmit}>
        <div className="card-body">
            What new?<button className="btn btn-success right">Post</button>
            <Field name={"text"} component={Textarea}
             placeholder="..."
            validate={[requiredField,maxLength]}/>
        </div>
    </form>
}

let MainReduxForm=reduxForm({form:"forPost"})(MainForm)

export default Main
