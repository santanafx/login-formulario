import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { MdHome, MdArticle, MdLogout } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { Context } from '../context/GlobalContext';
import imgDefault from '../images/profile-img-default.png'


export const NavBar = () => {

    const { autenticar, setAutenticar, usuarioLogado, setUsuarioLogado, dataBase, atualizarInformacoes, setAtualizarInformacoes } = React.useContext(Context);

    const navigate = useNavigate();

    const [imgProfile, setImgProfile] = React.useState(imgDefault);


    React.useEffect(() => {

        dataBase.forEach((element) => {
            if (element.id === usuarioLogado.id) {
                setImgProfile(element.profile)
                setAtualizarInformacoes(false)
            }
        })
    }, [atualizarInformacoes, autenticar])

    const deslogar = () => {
        setAutenticar(false);
        const atualizacaoUsuario = {
            id: '',
            profile: '',
            senha: '',
            usuario: '',
            localidade: '',
            descricao: '',
            nome: '',
        };
        setUsuarioLogado(atualizacaoUsuario);
        console.log(usuarioLogado);

        navigate('/login');
    }

    const entrarUsuario = () => {
        navigate('/usuario');
    }

    return (
        <section className='navBarContainerBg'>
            <nav className='navBarContainer'>
                <div className='navBarContainerOp'>
                    <div className='navBarLogin'>
                        <MdHome />
                        <Link to='/'>Início</Link>
                    </div>

                    <div className='navBarLogin'>
                        <MdArticle />
                        <Link to='/sobre'>Sobre</Link>
                    </div>
                </div>
                {autenticar ?
                    <div className='navBarUsuarioFoto' >
                        <img src={imgProfile} alt="Foto de perfil" />
                        <span>Bem vindo, {usuarioLogado.usuario}</span>
                        <button onClick={() => entrarUsuario()}><BsGearFill /> Configurar</button>
                        <button onClick={() => deslogar()}><MdLogout /> Deslogar</button>
                    </div>
                    :
                    <div className='navBarLogin'>
                        <HiUser />
                        <Link to='/login'>Login</Link>
                    </div>}
            </nav>
        </section>
    )
}
