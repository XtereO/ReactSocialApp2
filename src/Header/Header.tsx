import {NavLink} from "react-router-dom"

type PropsType={
  show:boolean
  toActive:()=>void
  toOff:()=>void
  logoutThunk:()=>void
  isAuth:boolean
}

let Header:React.FC<PropsType>=(props)=>{
    let toActive=()=>{
        props.toActive()
    }
    let toOff=()=>{
        props.toOff()
    }
    let logoutThunk=()=>{
        props.logoutThunk()
    }
    return <div className="Header sticky-top ">
      <div className="container-fluid">
        <div className="mr-3 left">
        {props.show?
        <button className="btn btn-secondary" onClick={toOff}>
            Menu
        </button>
        :
        <button className="btn btn-secondary" onClick={toActive}>
            Menu
        </button>
        }</div>
        FloatBoot
        <div className="right">
        {props.isAuth ?
        <NavLink to="/Login" className="Link">
            <button onClick={logoutThunk} className="btn btn-danger">Logout</button>
        </NavLink>
        :
        <NavLink to="/Login" className="Link">
            <button className="btn btn-primary">Login</button>
        </NavLink>}
        </div>
      </div>
    </div>
}

export default Header
