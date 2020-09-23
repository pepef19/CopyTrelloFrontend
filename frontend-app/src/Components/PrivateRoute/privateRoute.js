import React from "react";
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;

    const token = localStorage.getItem('token');

    console.log(token);

    return (
        <Route {...rest} render={props => (
            (token !== "undefined") && (token !== null) && (token !== undefined) ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;