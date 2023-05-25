import React, { useContext } from 'react'
import { Context } from '../context/globalContext'
import { useNavigate } from 'react-router-dom';
import './Usuario.css'
import profile from '../images/profile-img-default.png'
import { AiOutlineEdit } from "react-icons/ai";

export const Usuario = () => {

    const { dataBase, usuarioLogado } = useContext(Context)
    const [imgProfile, setImgProfile] = React.useState(profile);
    const [nome, setNome] = React.useState(true);
    const [nomeUsuario, setNomeUsuario] = React.useState('');
    const [descricaoUsuario, setDescricaoUsuario] = React.useState('');
    const [descricao, setDescricao] = React.useState('');

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
        console.log(dataBase)

    }, [])

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
                        <input onBlur={(event) => { setNome(true); setNomeUsuario(event.target.value) }} id='nome' type="text" disabled={nome} />
                        <label onClick={() => setNome(false)} htmlFor='nome'><AiOutlineEdit />Defina seu nome</label>
                    </div>

                    <span style={{ color: 'var(--cinza)', marginLeft: '15px' }}>{usuarioLogado}</span>

                    <div className='usuarioPerfilDescricaoContainer'>
                        <textarea cols="30" rows="10" onBlur={(event) => { setDescricao(true); setDescricaoUsuario(event.target.value) }} id='descricao' type="text" disabled={descricao} />
                        <label onClick={() => setDescricao(false)} htmlFor='descricao'><AiOutlineEdit />Fale sobre você</label>
                    </div>
                </div>

                <div className='usuarioTexto'>

                </div>
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
        </section >
    )
}
