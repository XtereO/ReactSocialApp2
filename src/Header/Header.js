import {NavLink} from "react-router-dom"

let header=(props)=>{
    let toActive=()=>{
        props.toActive()
    }
    let toOff=()=>{
        props.toOff()
    }
    let logoutThunk=()=>{
        props.logoutThunk()
    }
    return <div className="Header d-flex sticky-top">
        {props.show?
        <button className="btn btn-secondary" onClick={toOff}>
            Menu
        </button>
        :
        <button className="btn btn-secondary" onClick={toActive}>
            Menu
        </button>
        }
        FB
        <input className="form-control" />
        <button className="btn btn-success">Search</button>
        <div>
        {props.isAuth ? 
        <NavLink to="/Login" className="Link"> 
            <button onClick={logoutThunk} className="/btn btn-danger">Logout</button>
        </NavLink>
        : 
        <NavLink to="/Login" className="Link">
            <button className="/btn btn-primary">Login</button>
        </NavLink>}
        </div>
    </div>
}

export default header