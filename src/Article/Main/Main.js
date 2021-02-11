import Post from "./Post";
import Loader from "../../Loader";
import React from "react";
import {Field,reduxForm} from "redux-form"
import Textarea from "../../Bricks/Textarea";
import { requiredField,maxLengthCreator } from "../../Validates/ValidateForText";

let maxLength30=maxLengthCreator(30)

class Main extends React.Component{
    constructor(props){
        super(props)
        this.userId=this.props.match.params.userId
    }
    componentDidMount=()=>{
        if(!this.userId){
            this.userId=this.props.myId
        }
        this.props.setAccountThunk(this.userId)
        this.props.getStatusThunk(this.userId)
    }
    componentWillUnmount=()=>{
        this.props.setAccount(null)
    }

    state={
        editMode:false,
    }
    toActive(){
        this.setState({
            editMode:true
        })
    }
    toOff(){
        this.setState({
            editMode:false
        })
        this.props.setStatusThunk(this.props.status)
    }
    
    render(){  
    
    let userId=this.props.match.params.userId 
    let isMyPage=(!userId)  
    
    if(!this.props.Account){
        return <Loader />
    }

    let posts=this.props.posts
    if(posts.length!=0){
        posts =posts.map(e=>{
            return <Post message={e.message} img={e.img} 
                name={e.name} doLike={this.props.doLike}
                like={e.like} ableLike={e.ableLike} deletePost={this.props.deletePost}/>
        })
    }

    let changeStatus=(e)=>{
        this.props.changeStatus(e.target.value)
    }

    let name=this.props.Account.fullName;
    let img=this.props.Account.photos.large;
    if (!img){
        img="https://aachibilyaev.com/upload/iblock/c97/c970fbccb33a1923f4af631366566199.png"
    } 

    let doPost=(value)=>{
        this.props.doPost(value.text)
    }

    return<div>
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img className="img img-fluid rounded" src={img} />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <h1 className="Link my-2">{name}</h1>
                    <div className="d-flex my-2">
                        Status:
                        {isMyPage ? 
                            this.state.editMode ?
                            <div className="d-flex">
                                <input autoFocus={true}  onBlur={this.toOff.bind(this)} onChange={changeStatus} 
                                className="form-control" value={this.props.status}/>
                                <button onClick={this.toOff.bind(this)} className="btn btn-success right">
                                    \/
                                </button>
                            </div>
                            :
                            <span onDoubleClick={this.toActive.bind(this)}>
                                {!this.props.status?
                                "click to change status"
                                :
                                this.props.status
                                }
                            </span>
                        :
                            this.props.Account.aboutMe
                        }
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item d-flex">
                            DateBirth <input className="form-control" type="date" />
                        </li>
                        <li className="list-group-item d-flex">
                            City  
                            <select className="form-control">
                                <option active="active">
                                    Moscow
                                </option>
                                <option>
                                    SPb
                                </option>
                                <option>
                                    Other City
                                </option>
                            </select>
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
}

let MainForm=(props)=>{
    return<form onSubmit={props.handleSubmit}>
        <div className="card-body">
            What new?<button className="btn btn-success right">Post</button>
            <Field name={"text"} component={Textarea} 
             placeholder="..."
            validate={[requiredField,maxLength30]}/>
        </div>
    </form>
}

let MainReduxForm=reduxForm({form:"forPost"})(MainForm)

export default Main