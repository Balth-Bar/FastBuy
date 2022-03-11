import React, { useReducer, useMemo } from "react";
import { createContext } from "react";

export const AppContext = createContext()

const AppState = (props) => {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isLogged: true,
                        userToken: action.token,
                        userName: action.userName
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isLogged: false,
                        userToken: null,
                    };
                case 'SET_DATA':
                    return {
                        ...prevState,
                        apiData: action.apiData
                    };
                case 'SET_ORDER':
                    return {
                        ...prevState,
                        orderData: action.orderData
                    }

            }
        },
        {
            isLoading: true,
            isLogged: false,
            userToken: null,
            userName: "",
            apiData: [],
            orderData: []
        }
    )

    const authContext = useMemo(
        () => ({
            signIn: async (user) => { //token
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', userName: user });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            setData: (data) => dispatch({ type: 'SET_DATA', apiData: data }),
            setOrderData: (orderData) => dispatch({ type: 'SET_ORDER', orderData }),
        }),
        []
    );


    return (
        <AppContext.Provider value={{
            ...authContext,
            ...state
        }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppState