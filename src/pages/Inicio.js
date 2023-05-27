import React from 'react'
import './Inicio.css'
import { Context } from '../context/globalContext'

export const Inicio = () => {

    const { usuarioLogado } = React.useContext(Context)

    // const [attPosts, setAttPosts] = React.useState(false)

    // const [allPostsCopy, setAllPostsCopy] = React.useState(allPosts)

    return (
        <section className='inicioContainerBg'>
            <div className='inicioContainer'>
                {<img src={usuarioLogado.profile} alt="" />}
                {<h1>{usuarioLogado.nome}</h1>}
                {<h1>{usuarioLogado.usuario}</h1>}
                {<h1>{usuarioLogado.descricao}</h1>}
                {<h1>{usuarioLogado.localidade}</h1>}
            </div>
        </section>
    )
}

// id: usuarioLogado.id,
//     profile: imgProfile,
//         senha: usuarioLogado.senha,
//             usuario: usuarioLogado.usuario,
//                 localidade: usuarioLogado.localidade,
//                     descricao: usuarioLogado.descricao,
//                         nome: usuarioLogado.nome,