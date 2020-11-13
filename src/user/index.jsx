import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const UserPart = () => {

    return (
        <Switch>
            <Route exact path="/">
                <h1>I am user page</h1>
            </Route>
            <Route>
                <Redirect to="/404" />
            </Route>
        </Switch>
    )
};

export default UserPart;
