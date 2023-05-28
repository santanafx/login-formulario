import React from 'react'
import './Inicio.css'
import { Context } from '../context/GlobalContext'
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

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

    }, [])

    return (
        <section className='inicioContainerBg'>
            <div className='inicioContainer'>
                {checkUsuario ?
                    <div className="inicioContainerCheckUsuario">
                        <h1 style={{ marginBottom: '20px' }}>Olá, {usuarioLogado.nome}</h1>
                        <hr />
                        <div className='inicioFotoImg'>
                            <img src={usuarioLogado.profile} alt="" />
                        </div>
                        <hr />
                        <div className='inicioEmail'>
                            <AiOutlineMail />
                            <h1>{usuarioLogado.usuario}</h1>
                        </div>
                        <div className='inicioDescricaoTitulo'>
                            <h1>Descrição:</h1>
                        </div>
                        <hr />
                        <div className='inicioDescricao'>
                            <h3>{usuarioLogado.descricao}</h3>
                        </div>
                        <hr />
                        <div className='inicioLocalidade'>
                            <MdLocationOn />
                            <h1>{usuarioLogado.localidade}</h1>
                        </div>
                        <hr />
                        <div className='inicioHistoriaTitulo'>
                            <h1>História:</h1>
                        </div>
                        <hr />
                        <div className='inicioHistoria'>
                            <h3>{usuarioLogado.historia}</h3>
                        </div>
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
