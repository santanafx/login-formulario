import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { MdHome, MdArticle, MdLogout } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { Context } from '../context/globalContext';

export const NavBar = () => {

    const { autenticar, setAutenticar, usuarioLogado, dataBase } = React.useContext(Context);

    const navigate = useNavigate();

    const [imgProfile, setImgProfile] = React.useState('');


    React.useEffect(() => {

        dataBase.forEach((element) => {
            if (element.id === usuarioLogado.id) {
                setImgProfile(element.profile)
            }
        })
    }, [dataBase])

    const deslogar = () => {
        setAutenticar(false);
        navigate('/');
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
                        <img onClick={() => entrarUsuario()} src={imgProfile} alt="Foto de perfil" />
                        <span>Bem vindo, {usuarioLogado.usuario}</span>
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
