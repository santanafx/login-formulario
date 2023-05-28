import React, { useContext } from 'react'
import { Context } from '../context/globalContext'
import './Usuario.css'
import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";



export const Usuario = () => {

    const { usuarioLogado, dataBase, setDataBase, setAtualizarInformacoes, setUsuarioLogado } = useContext(Context)
    const [imgProfile, setImgProfile] = React.useState('');
    const [nome, setNome] = React.useState(true);
    const [nomeUsuario, setNomeUsuario] = React.useState('');
    const [descricaoUsuario, setDescricaoUsuario] = React.useState('');
    const [descricao, setDescricao] = React.useState(true);
    const [local, setLocal] = React.useState(true);
    const [localUsuario, setLocalUsuario] = React.useState('');
    const [historiaUsuario, setHistoriaUsuario] = React.useState('');
    const [historia, setHistoria] = React.useState(true);

    React.useEffect(() => {

        dataBase.forEach((element) => {
            if (element.id === usuarioLogado.id) {
                setImgProfile(element.profile)
            }
        })
    }, [])


    const salvar = () => {

        const atualizacaoUsuario = {
            id: usuarioLogado.id,
            profile: imgProfile,
            senha: usuarioLogado.senha,
            usuario: usuarioLogado.usuario,
            localidade: usuarioLogado.localidade,
            descricao: usuarioLogado.descricao,
            nome: usuarioLogado.nome,
            historia: usuarioLogado.historia,
        };

        const copyDataBase = dataBase;

        for (var i = 0; i < copyDataBase.length; i++) {
            if (copyDataBase[i].id === usuarioLogado.id) {
                copyDataBase[i] = atualizacaoUsuario;
            }
        }
        setDataBase(copyDataBase);
        setUsuarioLogado(atualizacaoUsuario);
        setAtualizarInformacoes(true);
        console.log(dataBase)

    }

    const handleChangeImg = (imgFile) => {
        setImgProfile(URL.createObjectURL(imgFile));
    }

    const handleChangeNome = (event) => {
        setNomeUsuario(event);

    }

    const handleChangeDescricao = (event) => {
        setDescricaoUsuario(event);

    }

    const handleChangeLocalidade = (event) => {
        setLocalUsuario(event);
    }

    const handleChangeHistoria = (event) => {
        setHistoriaUsuario(event);
    }

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
                        <textarea cols="25" rows="2"
                            onBlur={(event) => { setNome(true); setNomeUsuario(event.target.value); usuarioLogado.nome = nomeUsuario; }} id='nome' type="text" disabled={nome}
                            onChange={(event) => handleChangeNome(event.target.value)} value={nomeUsuario} />
                        <label onClick={() => setNome(false)} htmlFor='nome'><AiOutlineEdit />Defina seu nome</label>
                    </div>

                    <span style={{ color: 'var(--cinza)', marginLeft: '15px' }}><AiOutlineMail />{usuarioLogado.usuario}</span>

                    <div className='usuarioPerfilDescricaoContainer'>
                        <textarea cols="30" rows="5"
                            onBlur={(event) => { setDescricao(true); setDescricaoUsuario(event.target.value); usuarioLogado.descricao = descricaoUsuario }} id='descricao' type="text" disabled={descricao}
                            onChange={(event) => handleChangeDescricao(event.target.value)} value={descricaoUsuario} />
                        <label onClick={() => setDescricao(false)} htmlFor='descricao'><AiOutlineEdit />Fale sobre você</label>
                    </div>

                    <div className='usuarioPerfilLocalContainer'>
                        <div className='usuarioPerfilLocal'>
                            <MdLocationOn />
                            <textarea cols="28" rows="2"
                                onBlur={(event) => { setLocal(true); setLocalUsuario(event.target.value); usuarioLogado.localidade = localUsuario }} id='local' type="text" disabled={local}
                                onChange={(event) => handleChangeLocalidade(event.target.value)} value={localUsuario} />
                        </div>
                        <label onClick={() => setLocal(false)} htmlFor='local'><AiOutlineEdit />Digite sua localidade</label>
                    </div>

                </div>

                <div className='usuarioHistoria'>
                    <div className='usuarioHistoriaContainer'>
                        <h1>Conte sua história:</h1>
                        <div className='usuarioHistoriaText'>
                            <textarea cols="55" rows="20"
                                onBlur={(event) => { setHistoria(true); setHistoriaUsuario(event.target.value); usuarioLogado.historia = historiaUsuario }} id='historia' type="text" disabled={historia}
                                onChange={(event) => handleChangeHistoria(event.target.value)} value={historiaUsuario} />
                        </div>
                        <label onClick={() => setHistoria(false)} htmlFor='historia'><AiOutlineEdit />Digite sua historia</label>
                    </div>
                </div>

                <div className='usuarioBotao'>
                    <button onClick={() => salvar()}>Salvar</button>
                </div>
            </div>
        </section >
    )
}
