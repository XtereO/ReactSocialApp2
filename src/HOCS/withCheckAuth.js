import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let WithCheckAuth=(Component)=>{

    let WrapComponent=(props)=>{
        if(!props.isAuth){
            return <Redirect to="/Login" />
        }
        return <Component/>
    }
    let mapStateToProps=(state)=>{
        return{
            isAuth:state.menu.isAuth
        }
    }
    return connect(mapStateToProps,{})(WrapComponent)
}

export default WithCheckAuth