import React , {Component} from'react'
import AuthenticationService from './AuthenticationService'
import {Route,Redirect, Navigate} from 'react-router-dom'

class AuthenticatedRoute extends Component {
render(){
    if(AuthenticationService.isUserLoggedIn()){
        return {...this.props.children}
    }
    else {
        return <Navigate to='/login'/>
    }
}
}

export default AuthenticatedRoute