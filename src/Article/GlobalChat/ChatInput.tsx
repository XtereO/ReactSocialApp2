import { Formik, FormikState } from "formik"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendMessage } from "../../Redux/Reducers/chatReducer"
import { AppStateType } from "../../Redux/Redux";




type PropsType={
}
export let ChatInput:React.FC<PropsType>=(props)=>{
    
    const dispatch=useDispatch()
    const isInit=useSelector((state:AppStateType)=>state.chat.isInit)
    return<Formik
    enableReinitialize
    initialValues={{text:""}}
    onSubmit={(values,{resetForm})=>{
        if (!values.text){
            return
        }

        dispatch(sendMessage(values.text))
        resetForm()
    }}>
        {({
            values,
            handleSubmit,
            handleChange
        })=>{
            return<div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <textarea className=
                        {`w-100 form-control${isInit ? "" : " is-invalid"}`}  
                        onChange={handleChange} name="text" value={values.text}>
                        </textarea>
                    </div>
                    <div>
                        <button disabled={!isInit} 
                         className="w-100 btn btn-success btnInMessage">
                        </button>
                    </div>
                </form>
            </div>
        }}
    </Formik>
}