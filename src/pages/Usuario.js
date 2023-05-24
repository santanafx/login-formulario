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
        <section className='bloco'>
            <div >bloco1</div>
            <div>bloco2</div>

            <button onClick={() => deslogar()}>Deslogar</button>
        </section>
    )
}
