import React from 'react'
import './Cadastro.css'
import { Context } from '../context/globalContext';
import imgDefault from '../images/profile-img-default.png'

export const Cadastro = () => {

    const { dataBase, dispatch } = React.useContext(Context);

    const [cadastroUsuario, setCadastroUsuario] = React.useState('');
    const [cadastroSenha, setCadastroSenha] = React.useState('');
    const [cadastroSenhaInvalida, setCadastroSenhaInvalida] = React.useState(false);
    const [cadastroSenhaCompMinInv, setCadastroSenhaCompMinInv] = React.useState(false);
    const [cadastroSenhaCompMaxInv, setCadastroSenhaCompMaxInv] = React.useState(false);
    const [repetirCadastroSenha, setRepetirCadastroSenha] = React.useState('');
    const [usuarioCadastrado, setUsuarioCadastrado] = React.useState(false);
    const [validaEmail, setValidaEmail] = React.useState(false);
    // let novaData = {}

    React.useEffect(() => {
        console.log(dataBase)

    }, [dataBase])


    const cadastrar = () => {

        let novaData = {
            id: dataBase.length,
            usuario: cadastroUsuario,
            senha: cadastroSenha,
            profile: imgDefault,
            localidade: '',
            descricao: '',
            nome: '',
        }

        if (cadastroSenha.length < 6) {
            setCadastroSenhaCompMinInv(true);

        } else {
            setCadastroSenhaCompMinInv(false);

        }

        if (cadastroSenha.length > 9) {
            setCadastroSenhaCompMaxInv(true);

        } else {
            setCadastroSenhaCompMaxInv(false);

        }

        let validaEmail = false;
        if (cadastroUsuario.includes('@') && cadastroUsuario.includes('.com')) {
            setValidaEmail(false);
            validaEmail = false;
        } else {
            setValidaEmail(true);
            validaEmail = true;
        }

        if (repetirCadastroSenha === cadastroSenha) {
            setCadastroSenhaInvalida(false);

        } else {
            setCadastroSenhaInvalida(true)

        }

        let usuarioEncontrado = false;

        dataBase.forEach((element) => {
            if (element.usuario === cadastroUsuario) {
                setUsuarioCadastrado(true);
                usuarioEncontrado = true;
            }
        })

        if (cadastroSenhaInvalida === false && usuarioEncontrado === false && cadastroSenhaCompMinInv === false && cadastroSenhaCompMaxInv === false && validaEmail === false) {
            // setDataBase([...dataBase, novaData]);
            dispatch('ADD_USUARIO', { novaData: novaData })
        }

    }

    return (
        <section className='cadastroContainerBg'>
            <div className='cadastroContainer'>
                <h1>Faça o seu cadastro:</h1>
                <div>
                    <label htmlFor='cadastroUsuario'>Usuário</label>
                    <input className='loginInput' type="email" id='cadastroUsuario' placeholder='Digite o seu email.' value={cadastroUsuario} onChange={(event) => { setCadastroUsuario(event.target.value); setUsuarioCadastrado(false); }} />
                    {usuarioCadastrado ? <span style={{ color: 'red' }}>Usuário já existe.</span> : ''}
                    {validaEmail ? <span style={{ color: 'red' }}>Usuário inválido, para se cadastrar é preciso informar seu email.</span> : ''}

                </div>

                <div>
                    <label htmlFor='cadastroSenha'>Senha</label>
                    <input className='loginInput' type="password" id='cadastroSenha' placeholder='Digite sua senha.' value={cadastroSenha} onChange={(event) => { setCadastroSenha(event.target.value); setCadastroSenhaCompMinInv(false); setCadastroSenhaCompMaxInv(false); setCadastroSenhaInvalida(false) }} />
                    {cadastroSenhaCompMinInv ? <span style={{ color: 'red' }}>Sua senha precisa ter no mínimo 6 caracteres.</span> : ''}
                    {cadastroSenhaCompMaxInv ? <span style={{ color: 'red' }}>Sua senha pode ter no máximo 9 caracteres.</span> : ''}
                    {cadastroSenhaInvalida ? <span style={{ color: 'red' }}>Sua senha é diferente da senha abaixo.</span> : ''}
                </div>

                <div>
                    <label htmlFor='repetirCadastroSenha'>Confirme sua senha</label>
                    <input className='loginInput' type="password" id='repetirCadastroSenha' placeholder='Digite sua senha novamente.' value={repetirCadastroSenha} onChange={(event) => { setRepetirCadastroSenha(event.target.value); setCadastroSenhaInvalida(false); }} />
                    {cadastroSenhaCompMaxInv ? <span style={{ color: 'red' }}>Sua senha pode ter no máximo 9 caracteres.</span> : ''}
                    {cadastroSenhaInvalida ? <span style={{ color: 'red' }}>Repita a senha novamente.</span> : ''}
                </div>

                <div className='cadastroButton'>
                    <button onClick={() => cadastrar()}>Cadastrar</button>
                </div>
            </div>
        </section>
    )
}
