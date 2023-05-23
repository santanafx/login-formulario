import React from 'react'
import './Login.css'

export const Login = () => {
    return (
        <section className='loginContainerBg'>
            <div className='loginContainer'>
                <h1>Faça o seu login:</h1>
                <div>
                    <label htmlFor='usuario'>Usuário</label>
                    <input className='loginInput' type="text" id='usuario' placeholder='Digite o usuário.' />
                    <label htmlFor='senha'>Senha</label>
                    <input className='loginInput' type="password" id='senha' placeholder='Digite sua senha.' />
                </div>
                <div className='loginButton'>
                    <button>Entrar</button>
                </div>
            </div>
        </section>
    )
}
