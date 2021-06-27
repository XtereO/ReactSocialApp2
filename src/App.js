import logo from './logo.svg';
import { connect } from "react-redux";
import withSuspense from "./HOCS/withSuspense";
import Loader from "./Loader";
import './App.css';
import "./bootstrap.min.css";
import React from "react";
import ContainerHeader from "./Header/ContainerHeader";
import Aside from "./Aside/Aside";
import Footer from "./Footer/Footer";
import withCheckAuth from './HOCS/withCheckAuth';

import ContainerLogin from "./Login/ContainerLogin";

import { Route,Redirect,Switch } from 'react-router-dom';
import { setInitThunk } from "./Redux/Reducers/reduceApp";

//Last pack which will be load if need(React.lazy(()=>import("path")))
const ContainerMain = React.lazy(()=>import( "./Article/Main/ContainerMain" ))
const ContainerMessage= React.lazy(()=>import("./Article/Message/ContainerMessage"))
const ContainerFriends=React.lazy(()=>import("./Article/Friends/ContainerFriends"))
const ContainerGroups=React.lazy(()=>import("./Article/Groups/ContainerGroups"))
const ContainerAudio=React.lazy(()=>import("./Article/Audio/ContainerAudio"))
const ContainerVideo=React.lazy(()=>import("./Article/Video/ContainerVideo"))
const ContainerPhoto=React.lazy(()=>import("./Article/Photo/ContainerPhoto"))
const ContainerAddFriend=React.lazy(()=>import("./Article/Friends/AddFriend/ContainerAddFriend"))
const ContainerEdit=React.lazy(()=>import("./Article/Edit/ContainerEdit"))
const GlobalChat=React.lazy(()=>import('./Article/GlobalChat/GlobalChat'))

class App extends React.Component {
  componentDidMount(){
    this.props.setInitThunk()
    window.addEventListener("unhandledrejection",this.catchError)
  }
  catchError(promiseRejectionEvent){
    alert(promiseRejectionEvent)
  }
  //Switch for aside true/false
  state={
    show:true
  }
  toActive=()=>{
    this.setState({
      show:true
    })
  }
  toOff=()=>{
    this.setState({
      show:false
    })
  }
  render(){
  //check on init
  if(!this.props.isInit){
    return <Loader/>
  }
  return<div style={{overflowX:"hidden"}}>
      <ContainerHeader toOff={this.toOff} 
      toActive={this.toActive}
      show={this.state.show}/>
      <div className="row mt-4 mb-4">
      <div className={this.state.show?"col-md-3":""}>
        {this.state.show&&<div className="Aside">
          <Aside/>
        </div>}
      </div>
      <div className={this.state.show?"col-md-9":"col-md-12"}>
        <div className="Article">
          <Switch>
            <Route path="/Main/:userId?" render={()=>{return withSuspense(ContainerMain)}}/>
            <Route path="/Message/:userId?" render={()=>{return withSuspense(ContainerMessage)}} />
            <Route path="/Friends" render={()=>{return withSuspense(ContainerFriends)}}/>
            <Route path="/Groups" render={()=>{return withSuspense(ContainerGroups)}}/>
            <Route path="/Audio" render={()=>{return withSuspense(ContainerAudio)}}/>
            <Route path="/Video" render={()=>{return withSuspense(ContainerVideo)}}/>
            <Route path="/Photo" render={()=>{return withSuspense(ContainerPhoto)}}/>
            <Route path="/AddFriend" render={()=>{return withSuspense(ContainerAddFriend)}}/>
            <Route path="/Edit" render={()=>{return withSuspense(ContainerEdit)}}/>
            <Route path="/Login" render={()=>{return <ContainerLogin/>}}/>
            <Route path="/GlobalChat" render={()=>{return withSuspense(withCheckAuth(GlobalChat))}} />
            <Route path="*" render={()=>{return <Redirect to="/Main"/>}}/>
          </Switch>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  }
}

let mapStateToProps=(state)=>{
  return{
    isInit:state.app.init
  }
}

export default connect(mapStateToProps,{setInitThunk})(App);
