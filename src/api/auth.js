/* eslint-disable no-unused-vars */
import users from "./mock-data/users.json";
import { Cookie } from "utils";

export const auth = async (authlogin, authpassword) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const user = users.find(user => (
        user.login === authlogin && user.password === authpassword
    ));

    if (!user) return { status: 400 };

    const { login, password, ...response } = user;

    return response;
};

export const getUserData = async () => {
    await new Promise(resolve => setTimeout(resolve, 3500));

    const { accessToken: token } = Cookie.getCookie("accessToken");

    const user = users.find(({ accessToken }) => (
        accessToken === token
    ));

    if (!user) return { status: 401 };

    const { login, password, accessToken, ...response } = user;

    return response;
};
