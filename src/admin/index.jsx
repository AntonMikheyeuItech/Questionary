import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const AdminPart = () => {

    return (
        <Switch>
            <Route exact path="/">
                <h1>I am admin page</h1>
            </Route>
            <Route exact path="/login">
                <Redirect to="/" />
            </Route>
            <Route exact path="/register">
                <Redirect to="/" />
            </Route>
            <Route>
                <Redirect to="/404" />
            </Route>
        </Switch>
    )
};

export default AdminPart;
