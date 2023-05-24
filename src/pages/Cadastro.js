import React from 'react'
import './Cadastro.css'
import { Context } from '../context/globalContext';

export const Cadastro = () => {

    const { dataBase } = React.useContext(Context);

    const [cadastroUsuario, setCadastroUsuario] = React.useState('');
    const [cadastroSenha, setCadastroSenha] = React.useState('');
    const [cadastroSenhaInvalida, setCadastroSenhaInvalida] = React.useState('');
    const [cadastroSenhaCompMinInv, setCadastroSenhaCompMinInv] = React.useState('');
    const [cadastroSenhaCompMaxInv, setCadastroSenhaCompMaxInv] = React.useState('');
    const [repetirCadastroSenha, setRepetirCadastroSenha] = React.useState('');
    const [usuarioCadastrado, setUsuarioCadastrado] = React.useState(false);

    const cadastrar = () => {

        const novaData = {
            id: dataBase.length,
            usuario: cadastroUsuario,
            senha: cadastroSenha,
        }

        if (cadastroSenha.length < 6) {
            setCadastroSenhaCompMinInv(true);
        }

        if (cadastroSenha.length > 9) {
            setCadastroSenhaCompMaxInv(true);
        }

        dataBase.map(element => {
            if (element.usuario === cadastroUsuario) {
                setUsuarioCadastrado(true);
            } else {
                setUsuarioCadastrado(false);
            }

            if (repetirCadastroSenha === cadastroSenha) {
                setCadastroSenhaInvalida(false);

            } else {
                setCadastroSenhaInvalida(true)

            }

            if (repetirCadastroSenha === cadastroSenha && element.usuario !== cadastroUsuario && cadastroSenhaCompMinInv === false && cadastroSenhaCompMaxInv === false) {

                dataBase = [...dataBase, novaData]
            }

        })
    }

    // React.useEffect(() => {
    //     console.log(dataBase)
    // }, [dataBase])

    return (
        <section className='cadastroContainerBg'>
            <div className='cadastroContainer'>
                <h1>Faça o seu cadastro:</h1>

                <div>
                    <label htmlFor='cadastroUsuario'>Usuário</label>
                    <input className='loginInput' type="email" id='cadastroUsuario' placeholder='Digite o seu email.' value={cadastroUsuario} onChange={(event) => { setCadastroUsuario(event.target.value); }} />
                    {usuarioCadastrado ? <span style={{ color: 'red' }}>Usuário já existe.</span> : ''}

                </div>

                <div>
                    <label htmlFor='cadastroSenha'>Senha</label>
                    <input className='loginInput' type="password" id='cadastroSenha' placeholder='Digite sua senha.' value={cadastroSenha} onChange={(event) => { setCadastroSenha(event.target.value); setCadastroSenhaCompMinInv(false); setCadastroSenhaCompMaxInv(false); setCadastroSenhaInvalida(false) }} />
                    {cadastroSenhaCompMinInv ? <span style={{ color: 'red' }}>Sua senha precisa ter no mínimo 6 caracteres.</span> : ''}
                    {cadastroSenhaCompMaxInv ? <span style={{ color: 'red' }}>Sua senha pode ter no máximo 9 caracteres.</span> : ''}
                    {cadastroSenhaInvalida ? <span style={{ color: 'red' }}>Sua senha não é diferente da senha abaixo.</span> : ''}
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
