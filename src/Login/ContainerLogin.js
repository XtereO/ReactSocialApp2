import { connect } from "react-redux"
import Login from "./Login";
import { loginThunk,logoutThunk } from "../Redux/Reducers/reduceMenu";

let mapStateToProps=(state)=>{
    return{
    isAuth:state.menu.isAuth,
    captcha:state.menu.captchaUrl
    }
}

export default connect(mapStateToProps,{
    loginThunk})(Login)