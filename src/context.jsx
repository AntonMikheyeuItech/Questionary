/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import React, { useCallback, useContext, useReducer } from 'react';
import { apiAuth } from 'api';

export const context = React.createContext();

export const useGlobalContext = () => useContext(context);

const ACTIONS = {
    getUserData: "getUserData",
    setUserData: "setUserData"
};

const initialState = {
    user: null
};

let dispatchRef = () => {};

const getUserDataAsync = async () => {
    const user = await apiAuth.getUserData();

    dispatchRef({ type: ACTIONS.setUserData, payload: user });
};

function ProviderValue() {
    const { getUserData, setUserData } = ACTIONS;
    const reducer = useCallback((state, { type, payload }) => {
        switch (type) {
        case getUserData:
            getUserDataAsync();

            return state;
        case setUserData:
            return { ...state, user: payload }
        default:
            throw new Error("Incorrect action type");
        }
    }, []);

    const [contextState, dispatch] = useReducer(reducer, initialState);

    dispatchRef = (...args) => dispatch(...args);

//public states and methods are below

    this.contextState = contextState;

    this.getUserData = () => dispatch({ type: getUserData });
}


export const ContextProvider = ({ children }) => {
    return (
        <context.Provider value={new ProviderValue()}>
            {children}
        </context.Provider>
    )
};
