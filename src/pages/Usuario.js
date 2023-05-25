import React from 'react'
import { Context } from '../context/globalContext'
import { useNavigate } from 'react-router-dom';
import './Usuario.css'

export const Usuario = () => {

    const { setAutenticar } = React.useContext(Context);
    const navigate = useNavigate();

    const deslogar = () => {
        setAutenticar(false);
        navigate('/');
    }

    return (
        <section className='usuarioContainerBg'>
            <div className='usuarioContainer'>
                <div className='usuarioFoto'>bloco1</div>
                <div className="usuarioPerfil">bloco2</div>
                <div className='usuarioTexto'>bloco3</div>
                <div className='usuarioLista'>
                    <div>subbloco1</div>
                    <div>subbloco2</div>
                    <div>subbloco3</div>
                    <div>subbloco4</div>
                </div>
                <div className='usuarioBotao'>
                    <button onClick={() => deslogar()}>Deslogar</button>
                </div>
            </div>
        </section>
    )
}
