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
                case "NAVIGATE":
                    return {
                        ...prevState,
                        colors: action.colors
                    }
            }
        },
        {
            isLoading: true,
            isLogged: false,
            userToken: null,
            userName: ""
        }
    )

    const authContext = useMemo(
        () => ({
            signIn: async (user) => { //token
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', userName: user });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
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