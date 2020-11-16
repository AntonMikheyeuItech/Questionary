import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import LogIn from './login';
import Register from './register';

const LoginPage = () => {

    return (
        <Switch>
            <Route exact path="/login">
                <LogIn />
            </Route>
            <Route exact path="/register">
                <Register />
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
