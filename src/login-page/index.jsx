import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const LoginPage = () => {

    return (
        <Switch>
            <Route exact path="/login">
                <h1>I am login page</h1>
            </Route>
            <Route exact path="/register">
                <h1>I am register page</h1>
            </Route>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route>
                <Redirect to="/404" />
            </Route>
        </Switch>
    )
};

export default LoginPage;
