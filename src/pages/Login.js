import React from 'react'
import './Login.css'
import { Context } from '../context/globalContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const { dataBase, setAutenticar, setUsuarioLogado, usuarioLogado } = React.useContext(Context);
    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhaInvalidada, setSenhaInvalidada] = React.useState('');
    const [senhaComprimentoMinimoInvalido, setSenhaComprimentoMinimoInvalido] = React.useState('');
    const [senhaComprimentoMaximoInvalido, setSenhaComprimentoMaximoInvalido] = React.useState('');
    const [usuarioNaoCadastrado, setUsuarioNaoCadastrado] = React.useState('');
    const [validaEmail, setValidaEmail] = React.useState(false);

    const fazerLogin = () => {

        if (senha.length < 6) {
            setSenhaComprimentoMinimoInvalido(true);
        }

        if (senha.length > 9) {
            setSenhaComprimentoMaximoInvalido(true);
        }

        let validaEmail = false;
        if (usuario.includes('@') && usuario.includes('.com')) {
            setValidaEmail(false);
            validaEmail = false;
        } else {
            setValidaEmail(true);
            validaEmail = true;
        }

        dataBase.forEach(element => {
            if (element.senha === senha) {
                setSenhaInvalidada(false);
            } else {
                setSenhaInvalidada(true);
            }

            if (element.usuario === usuario && element.senha === senha) {
                setAutenticar(true);
                setUsuarioLogado(element);
                navigate('/usuario');
            }

            if (element.usuario !== usuario) {
                setUsuarioNaoCadastrado(true);
            } else {
                setUsuarioNaoCadastrado(false);
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
                    <input className='loginInput' type="email" id='usuario' placeholder='Digite o seu email.' value={usuario} onChange={(event) => { setUsuario(event.target.value); }} />
                    {usuarioNaoCadastrado ? <span style={{ color: 'red' }}>Usuário não é cadastrado.</span> : ''}
                    {validaEmail ? <span style={{ color: 'red' }}>Para logar é preciso informar seu email.</span> : ''}

                </div>

                <div>
                    <label htmlFor='senha'>Senha</label>
                    <input className='loginInput' type="password" id='senha' placeholder='Digite sua senha.' value={senha} onChange={(event) => { setSenha(event.target.value); setSenhaInvalidada(false); setSenhaComprimentoMinimoInvalido(false); setSenhaComprimentoMaximoInvalido(false) }} />
                    {senhaInvalidada ? <span style={{ color: 'red' }}>Senha inválida.</span> : ''}
                    {senhaComprimentoMinimoInvalido ? <span style={{ color: 'red' }}>Sua senha precisa ter no mínimo 6 caracteres.</span> : ''}
                    {senhaComprimentoMaximoInvalido ? <span style={{ color: 'red' }}>Sua senha pode ter no máximo 9 caracteres.</span> : ''}
                </div>

                <div className='loginButton'>
                    <button onClick={() => fazerLogin()}>Entrar</button>
                    <button onClick={() => fazerCadastro()}>Cadastrar</button>
                </div>
            </div>
        </section>
    )
}
