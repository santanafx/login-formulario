import React from 'react'
import './Inicio.css'
import { Context } from '../context/globalContext'

export const Inicio = () => {

    const { usuarioLogado, setUsuarioLogado } = React.useContext(Context)
    const [checkUsuario, setCheckUsuario] = React.useState();

    React.useEffect(() => {
        console.log(usuarioLogado.id)
        if (usuarioLogado.id === undefined) {
            setCheckUsuario(false)
        }

        if (usuarioLogado.id >= 1) {
            setCheckUsuario(true)
        }

        // if (usuarioLogado.length === undefined) {
        //     setCheckUsuario(true);
        // }
    }, [])

    return (
        <section className='inicioContainerBg'>
            <div className='inicioContainer'>
                {/* {usuarioLogado.id !== '' ? setCheckUsuario(true) : setCheckUsuario(false)} */}
                {checkUsuario ?
                    <div>
                        <img src={usuarioLogado.profile} alt="" />
                        <h1>{usuarioLogado.nome}</h1>
                        <h1>{usuarioLogado.usuario}</h1>
                        <h1>{usuarioLogado.descricao}</h1>
                        <h1>{usuarioLogado.localidade}</h1>
                    </div>
                    :
                    <div>
                        <h1>Bem vindo a página. Por favor, faça seu login.</h1>
                    </div>
                }

            </div>
        </section>
    )
}
