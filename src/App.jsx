import React, { useEffect, Suspense } from 'react';
import Header from 'ui/header';
import Footer from 'ui/footer';
import Loader from 'ui/loader';
const LoginPage = React.lazy(() => import('./login-page'));
const UserPart = React.lazy(() => import('./user'));
const AdminPart = React.lazy(() => import('./admin'));
import { Cookie } from 'utils';
import { ContextProvider, useGlobalContext } from 'context';

const mainPart = Component => (
    <Suspense fallback={<Loader />}>
        <Header />
        <main className="content">
            <Component />
        </main>
        <Footer />
    </Suspense>
);

const App = () => {
    const { getUserData, contextState: { user } } = useGlobalContext();
    useEffect(getUserData, []);
    const { accessToken } = Cookie.getCookie("accessToken");

    if (!accessToken) {
        return mainPart(LoginPage); 
    }

    if (!user) {
        return <Loader />;
    }

    let Part;

    switch (user.type) {
        case "ADMIN":
            Part = AdminPart;
            break;
        default:
            Part = UserPart;
            break;
    }

    return mainPart(Part);
};

// eslint-disable-next-line react/display-name
export default () => (<ContextProvider><App /></ContextProvider>);
