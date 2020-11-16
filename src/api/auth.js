/* eslint-disable no-unused-vars */
import users from "./mock-data/users.json";
import { Cookie } from "utils";

const tmpUsers = users;

export const auth = async (authlogin, authpassword) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const user = tmpUsers.find(user => (
        user.login === authlogin && user.password === authpassword
    ));

    if (!user) return null;

    const { login, password, accessToken, ...response } = user;

    Cookie.setCookie("accessToken", accessToken);

    return response;
};

export const getUserData = async () => {
    await new Promise(resolve => setTimeout(resolve, 3500));

    const { accessToken: token } = Cookie.getCookie("accessToken");

    const user = tmpUsers.find(({ accessToken }) => (
        accessToken === token
    ));

    if (!user) {
        Cookie.deleteCookie("accessToken");

        return null;
    }

    const { login, password, accessToken, ...response } = user;

    return response;
};

export const register = async (login, email, password) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const user = {
        accessToken: `${login}/${password}`,
        login,
        password,
        type: "USER",
        email
    };

    tmpUsers.push(user);

    const { login: removedLogin, password: removedPassword, accessToken, ...response } = user;

    Cookie.setCookie("accessToken", accessToken);

    return response;
};
