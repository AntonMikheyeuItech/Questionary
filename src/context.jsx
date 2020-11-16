/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import React, { useCallback, useContext, useReducer } from 'react';
import { Cookie } from 'utils';
import { apiAuth } from 'api';

const hasAccessToken = Boolean(Cookie.getCookie("accessToken").accessToken);

export const context = React.createContext();

export const useGlobalContext = () => useContext(context);

const ACTIONS = {
    auth: "auth",
    setIsLoading: "setIsLoading",
    setUserData: "setUserData"
};

const initialState = {
    isAuthorized: hasAccessToken,
    isLoading: hasAccessToken,
    user: null
};

// Async dispatchers

let dispatchRef = () => {};

const getUserDataAsync = async () => {
    dispatchRef({ type: ACTIONS.setIsLoading, payload: true });

    const user = await apiAuth.getUserData();

    dispatchRef({ type: ACTIONS.setUserData, payload: user });
};

const authAsync = async ({ login, password }) => {
    dispatchRef({ type: ACTIONS.setIsLoading, payload: true });

    const user = await apiAuth.auth(login, password);

    dispatchRef({ type: ACTIONS.auth, payload: { user, isAuthorized: Boolean(user) } });
};

const registerAsync = async ({ login, email, password }) => {
    dispatchRef({ type: ACTIONS.setIsLoading, payload: true });

    const user = await apiAuth.register(login, email, password);

    dispatchRef({ type: ACTIONS.auth, payload: { user, isAuthorized: Boolean(user) } });
};

//////////////////////////////////////////////////////////////

function ProviderValue() {
    const { auth, setIsLoading, setUserData } = ACTIONS;
    const reducer = useCallback((state, { type, payload }) => {
        switch (type) {
        case auth:
            return { ...state, ...payload, isLoading: false };
        case setIsLoading:
            if(payload !== state.isLoading) return { ...state, isLoading: payload };

            return state;
        case setUserData:
            return { ...state, user: payload, isLoading: false };
        default:
            throw new Error("Incorrect action type");
        }
    }, []);

    const [contextState, dispatch] = useReducer(reducer, initialState);

    dispatchRef = (...args) => dispatch(...args);

//public states and methods are below

    this.contextState = contextState;

    this.getUserDataAsync = getUserDataAsync;

    this.authAsync = authAsync;

    this.registerAsync = registerAsync;
}


export const ContextProvider = ({ children }) => {
    return (
        <context.Provider value={new ProviderValue()}>
            {children}
        </context.Provider>
    )
};
