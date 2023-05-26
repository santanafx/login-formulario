import React, { useContext } from 'react'
import { Context } from '../context/globalContext'
import { useNavigate } from 'react-router-dom';
import './Usuario.css'
import profile from '../images/profile-img-default.png'
import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

export const Usuario = () => {

    const { dataBase, usuarioLogado, setUsuarioLogado } = useContext(Context)
    const [imgProfile, setImgProfile] = React.useState(profile);
    const [nome, setNome] = React.useState(true);
    const [nomeUsuario, setNomeUsuario] = React.useState('');
    const [descricaoUsuario, setDescricaoUsuario] = React.useState('');
    const [descricao, setDescricao] = React.useState(true);
    const [local, setLocal] = React.useState(true);
    const [localUsuario, setLocalUsuario] = React.useState('');

    const { setAutenticar } = React.useContext(Context);
    const navigate = useNavigate();

    const deslogar = () => {
        setAutenticar(false);
        navigate('/');
    }

    const handleChangeImg = (imgFile) => {
        setImgProfile(URL.createObjectURL(imgFile));
    }

    React.useEffect(() => {
        let atualizacaoUsuario = {
            id: usuarioLogado.id,
            profile: imgProfile,
            senha: usuarioLogado.senha,
            usuario: usuarioLogado.usuario,
        };

        setUsuarioLogado(atualizacaoUsuario);
        console.log(usuarioLogado)
    }, [imgProfile])

    return (
        <section className='usuarioContainerBg'>
            <div className='usuarioContainer'>

                <div className='usuarioFoto'>
                    <div className='usuarioFotoImg'>
                        <img src={imgProfile} alt="Foto de perfil" />
                    </div>
                    <label htmlFor='escolherImagem'><AiOutlineEdit />Escolha a imagem</label>
                    <input id='escolherImagem' accept='image/*' style={{ visibility: "hidden" }} type="file" onChange={(event) => handleChangeImg(event.target.files[0])} />
                </div>

                <div className="usuarioPerfil">
                    <div className='usuarioPerfilContainer'>
                        <textarea cols="25" rows="2" onBlur={(event) => { setNome(true); setNomeUsuario(event.target.value) }} id='nome' type="text" disabled={nome} />
                        <label onClick={() => setNome(false)} htmlFor='nome'><AiOutlineEdit />Defina seu nome</label>
                    </div>

                    <span style={{ color: 'var(--cinza)', marginLeft: '15px' }}><AiOutlineMail />{usuarioLogado.usuario}</span>

                    <div className='usuarioPerfilDescricaoContainer'>
                        <textarea cols="30" rows="5" onBlur={(event) => { setDescricao(true); setDescricaoUsuario(event.target.value) }} id='descricao' type="text" disabled={descricao} />
                        <label onClick={() => setDescricao(false)} htmlFor='descricao'><AiOutlineEdit />Fale sobre você</label>
                    </div>

                    <div className='usuarioPerfilLocalContainer'>
                        <div className='usuarioPerfilLocal'>
                            <MdLocationOn />
                            <textarea cols="28" rows="2" onBlur={(event) => { setLocal(true); setLocalUsuario(event.target.value) }} id='local' type="text" disabled={local} />
                        </div>
                        <label onClick={() => setLocal(false)} htmlFor='Local'><AiOutlineEdit />Digite sua localidade</label>
                    </div>

                </div>

                <div className='usuarioPosts'>
                    <h1>Gerenciador de Posts</h1>
                </div>

                <div className='usuarioBotao'>
                    <button onClick={() => deslogar()}>Deslogar</button>
                </div>
            </div>
        </section >
    )
}
