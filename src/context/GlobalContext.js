import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [autenticar, setAutenticar] = React.useState(false);

    const dataBase = [
        {
            id: 0,
            usuario: 'santanafx@hotmail.com',
            senha: '123456',
        },
    ]

    return (
        <Context.Provider value={{ dataBase, autenticar, setAutenticar }}>{children}</Context.Provider>
    )
}