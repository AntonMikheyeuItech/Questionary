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
import { Cookie } from 'utils';
import { ContextProvider, useGlobalContext } from 'context';

const mainPart = Component => (
    // eslint-disable-next-line react/display-name
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

const App = () => {
    const { getUserData, contextState: { user } } = useGlobalContext();
    const { accessToken } = Cookie.getCookie("accessToken");
    useEffect(() => accessToken && getUserData(), []);

    let Part;

    if (!accessToken) {
        Part = mainPart(LoginPage); 
    } else if (!user) {
        Part = Loader;
    } else {
        switch (user.type) {
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

// eslint-disable-next-line react/display-name
export default () => (<ContextProvider><App /></ContextProvider>);
