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

    // const [postId, setPostId] = React.useState('');

    const [usuarioLogado, setUsuarioLogado] = React.useState([{}]);

    // const allPostsList = [
    //     {
    //         idComentario: 0,
    //         foto: '',
    //         comentario: '',
    //         profile: '',
    //         nome: '',
    //     }
    // ];

    // const [allPosts, setAllPosts] = React.useState(allPostsList);


    return (
        <Context.Provider value={{ dataBase, setDataBase, dispatch, autenticar, setAutenticar, usuarioLogado, setUsuarioLogado, atualizarInformacoes, setAtualizarInformacoes }}>{children}</Context.Provider>
    )
}