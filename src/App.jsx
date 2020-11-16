/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, Suspense } from 'react';
import Header from 'ui/header';
import Footer from 'ui/footer';
import Loader from 'ui/loader';
import NotFound from 'ui/not-found';
const LoginPage = React.lazy(() => import('./login-page'));
const UserPart = React.lazy(() => import('./user'));
const AdminPart = React.lazy(() => import('./admin'));
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

const mainPart = Component => (
    () => (
        <Suspense fallback={<Loader />}>
            <Header />
            <main className="content">
                <Component />
            </main>
            <Footer />
        </Suspense>
    )
);

const App = ({ getUserDataAsync, userType, isAuthorized, isLoading }) => {

    useEffect(() => isAuthorized && getUserDataAsync(), []);

    let Part;

    if (!isAuthorized) {
        Part = mainPart(LoginPage); 
    } else if (isLoading && !userType) {
        Part = Loader;
    } else {
        switch (userType) {
            case "ADMIN":
                Part = mainPart(AdminPart);
                break;
            default:
                Part = mainPart(UserPart);
                break;
        }
    }

    return (
        <Router>
            <Switch>
                <Route path="/404"><NotFound /></Route>
                <Route><Part /></Route>
            </Switch>
        </Router>
    );
};

export default React.memo(App, (prevProps, nextProps) => {
    if (
        prevProps.userType === nextProps.userType
        && prevProps.isAuthorized === nextProps.isAuthorized
    ) return true;

    return false;
});
