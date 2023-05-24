import React from 'react'
import { Context } from '../context/globalContext'
import { useNavigate } from 'react-router-dom';

export const Usuario = () => {

    const { setAutenticar } = React.useContext(Context);
    const navigate = useNavigate();

    const deslogar = () => {
        setAutenticar(false);
        navigate('/');
    }

    return (
        <div>
            <button onClick={() => deslogar()}>Deslogar</button>
        </div>
    )
}
