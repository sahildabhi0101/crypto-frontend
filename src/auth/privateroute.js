import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { isauthenticated } from './index';

const Privateroute = ({ component: Component, ...rest }) =>
(
    <Route {...rest} render={props => isauthenticated() ?
        (
            <Component  {...props} />
        ) :
        (
            <Navigate to={{
                pathname: "/signin",
                state: { from: props.location }
            }} />
        )} />
);

export default Privateroute;