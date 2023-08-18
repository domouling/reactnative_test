import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Definir como luce o que inf tendriamos aca
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: ( iconName: string ) => void;
    changeUserName: ( username: string ) => void;
}

// Crear contexto
export const AuthContext = createContext( {} as AuthContextProps );


// Componente proveedor de estados
//export const AuthProvider = ({ children }: { children: JSX.Element[] }) => {
export const AuthProvider = ({ children }: any) => {

    const [ authState, dispatch ] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const changeUserName = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUserName,
        }}>
            { children }
        </AuthContext.Provider>
    );

};

