import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const dataBase = [
        {
            id: 0,
            usuario: 'santanafx@hotmail.com',
            senha: '123',
        },
    ]

    return (
        <Context.Provider value={{ dataBase }}>{children}</Context.Provider>
    )
}