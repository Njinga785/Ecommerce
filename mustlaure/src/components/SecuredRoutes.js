import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


export class SecuredRoutes extends Component {
    SecuredRoutes = ({ Component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "signin",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );

    render() {

        return (
            <div></div>
        )
    }

}
export default SecuredRoutes

