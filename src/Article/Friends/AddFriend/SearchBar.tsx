import {Formik} from "formik"
import { maxLengthCreator } from "../../../Validates/ValidateForText";
import React from "react";
import { requestFriendsThunk } from "../../../Redux/Reducers/reduceAddFriend";

type errorType={
    term:null | string
}
type initValueType={
    term:string
}
type PropsType={
  requestFriends:(term:string)=>void
}
const SearchBar:React.FC<PropsType>=(props)=>{
    return<div>
        <Formik
        initialValues={{term:""} as initValueType}
        validate={values=>{
            const errors:errorType={
                term:null
            }
            if(values.term.length>30){
                errors.term="max length is 30"
                return errors
            }
            return {};
        }}
        onSubmit={(values:initValueType,{ setSubmitting })=>{
            props.requestFriends(values.term)
            setSubmitting(false);
        }}>
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <div className="d-flex">
           <input
             type="search"
             className="form-control"
             name="term"
             onChange={handleChange}
             value={values.term}
           />
           <button className="btn btn-success" type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </div>
           <span className="text-danger">
             {touched.term && errors.term && errors.term}
           </span>
         </form>
       )}
        </Formik>
    </div>
}

export default SearchBar