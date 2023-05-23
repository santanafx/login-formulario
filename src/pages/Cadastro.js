import React from 'react'
import './Cadastro.css'

export const Cadastro = () => {

    const [cadastroUsuario, setCadastroUsuario] = React.useState('')
    const [cadastroSenha, setCadastroSenha] = React.useState('')
    const [repetirCadastroSenha, setRepetirCadastroSenha] = React.useState('')


    const cadastrar = () => {
        console.log(cadastrar)
    }

    return (
        <section className='cadastroContainerBg'>
            <div className='cadastroContainer'>
                <h1>Faça o seu cadastro:</h1>

                <div>
                    <label htmlFor='cadastroUsuario'>Usuário</label>
                    <input className='loginInput' type="email" id='cadastroUsuario' placeholder='Digite o seu email.' value={cadastroUsuario} onChange={(event) => setCadastroUsuario(event.target.value)} />

                </div>

                <div>
                    <label htmlFor='cadastroSenha'>Senha</label>
                    <input className='loginInput' type="password" id='cadastroSenha' placeholder='Digite sua senha.' value={cadastroSenha} onChange={(event) => setCadastroSenha(event.target.value)} />

                </div>

                <div>
                    <label htmlFor='repetirCadastroSenha'>Confirme sua senha</label>
                    <input className='loginInput' type="password" id='repetirCadastroSenha' placeholder='Digite sua senha novamente.' value={repetirCadastroSenha} onChange={(event) => setRepetirCadastroSenha(event.target.value)} />

                </div>

                <div className='cadastroButton'>
                    <button onClick={() => cadastrar()}>Cadastrar</button>

                </div>
            </div>
        </section>
    )
}
