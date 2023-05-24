import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [autenticar, setAutenticar] = React.useState(false);

    var dataBase = [
        {
            id: 1,
            usuario: 'santanafx@hotmail.com',
            senha: '123456',
        },
        {
            id: 2,
            usuario: 'rafaelfx@hotmail.com',
            senha: '123456',
        },

    ]

    return (
        <Context.Provider value={{ dataBase, autenticar, setAutenticar }}>{children}</Context.Provider>
    )
}