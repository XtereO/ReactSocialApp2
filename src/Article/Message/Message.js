import SingleMessage from "./singleMessage";
import People from "./People";
import React from "react";
import { reduxForm,Field } from "redux-form";
import TextareaUp from "../../Bricks/TextareaUp";
import { maxLengthCreator, requiredField } from "../../Validates/ValidateForText";

class Message extends React.Component{
    render(){
    let userId=this.props.match.params.userId
    if (!userId){
        userId=1
    }
    let doMessage=(value)=>{
        this.props.doMessage(userId,value.text)
    }

    let peopleData=this.props.peopleData.map((p)=>{
        return<People changeDialog={this.props.changeDialog} name={p.name} count={p.newM} id={p.id}/>
    })
    let messageData=[];
    for (let key in this.props.messageData){        
        let m=this.props.messageData[key]
        if(m.id==userId){
            let curMessage=<SingleMessage name={m.name} 
            message={m.message} img={m.img}/>
            messageData.push(curMessage)
        }
    }
    return<div>
    <div className="ForMessage row">
        <div className="col-md-3">
            <ul>
                {peopleData}
            </ul>
        </div>

        <div className="col-md-9">
            {messageData}
            <MessageReduxForm onSubmit={doMessage}/>
        </div>
    </div>
    </div>
    }
}

let maxLength300=maxLengthCreator(300)

let MessageForm=(props)=>{
    return<form onSubmit={props.handleSubmit}>
        <div className="w-100 mt-2">
            <Field component={TextareaUp} placeholder="..."
            validate={[requiredField,maxLength300]}
            name={"text"}/>
        </div>
        <div>
            <button className="btn btn-success w-100 btnInMessage">
            </button>
        </div>
    </form>
}

let MessageReduxForm=reduxForm({form:"forMessage"})(MessageForm)

export default Message