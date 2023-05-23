import React from 'react'
import './Login.css'
import { Context } from '../context/globalContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const { dataBase } = React.useContext(Context);
    const [usuario, setUsuario] = React.useState('');
    const [usuarioInvalidado, setUsuarioInvalidado] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhaInvalidada, setSenhaInvalidada] = React.useState('');

    const fazerLogin = () => {
        dataBase.forEach(element => {
            if (element.usuario === usuario && element.senha === senha) {
                setUsuarioInvalidado(false)
                setSenhaInvalidada(false)
            } else {
                setUsuarioInvalidado(true)
                setSenhaInvalidada(true)
            }
        });
    }

    const fazerCadastro = () => {
        navigate('/cadastro');
    }

    return (
        <section className='loginContainerBg'>
            <div className='loginContainer'>
                <h1>Faça o seu login:</h1>

                <div>
                    <label htmlFor='usuario'>Usuário</label>
                    <input className='loginInput' type="email" id='usuario' placeholder='Digite o usuário.' value={usuario} onChange={(event) => setUsuario(event.target.value)} />
                    {usuarioInvalidado ? <span style={{ color: 'red' }}>Usuário ou senha inválido.</span> : ''}
                </div>

                <div>
                    <label htmlFor='senha'>Senha</label>
                    <input className='loginInput' type="password" id='senha' placeholder='Digite sua senha.' value={senha} onChange={(event) => setSenha(event.target.value)} />
                    {senhaInvalidada ? <span style={{ color: 'red' }}>Usuário ou senha inválido.</span> : ''}
                </div>

                <div className='loginButton'>
                    <button onClick={() => fazerLogin()}>Entrar</button>
                    <button onClick={() => fazerCadastro()}>Cadastrar</button>
                </div>
            </div>
        </section>
    )
}
