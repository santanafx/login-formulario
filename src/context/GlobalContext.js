import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const dataBaseList = [
        {}
    ];

    const [dataBase, setDataBase] = React.useState(dataBaseList);

    const dispatch = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_USUARIO':
                setDataBase([...dataBase, payload.novaData])
                return;
            case 'ATT_USUARIO':
                setDataBase(payload.newDataBase)
                return;

            default:
                return;
        }
    }

    const [autenticar, setAutenticar] = React.useState(false);

    const [atualizarInformacoes, setAtualizarInformacoes] = React.useState(false);

    const [usuarioLogado, setUsuarioLogado] = React.useState([{
        id: '',
        profile: '',
        senha: '',
        usuario: '',
        localidade: '',
        descricao: '',
        nome: '',
        historia: '',
    }]);

    return (
        <Context.Provider value={{ dataBase, setDataBase, dispatch, autenticar, setAutenticar, usuarioLogado, setUsuarioLogado, atualizarInformacoes, setAtualizarInformacoes }}>{children}</Context.Provider>
    )
}