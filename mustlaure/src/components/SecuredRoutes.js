import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {Redirect} from 'react-router-dom'


  export class SecuredRoutes extends Component {  
      constructor() {
          super()
          this.state = {
              isAuthenticated: false, 
              isLoading: true
          } 

          this.componentDidMount() {
              
          }
      }
      render(){
    return (
        <div>
        </div>
        )
    }
} 

export default SecuredRoutes
    
    