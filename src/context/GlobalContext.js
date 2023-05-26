import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [autenticar, setAutenticar] = React.useState(false);

    const [dataBase, setDataBase] = React.useState([{}]);

    const [usuarioLogado, setUsuarioLogado] = React.useState([{}]);


    return (
        <Context.Provider value={{ dataBase, autenticar, setAutenticar, setDataBase, usuarioLogado, setUsuarioLogado }}>{children}</Context.Provider>
    )
}