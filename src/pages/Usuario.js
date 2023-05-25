import React from 'react'
import { Context } from '../context/globalContext'
import { useNavigate } from 'react-router-dom';
import './Usuario.css'
import profile from '../images/profile-img-default.png'

export const Usuario = () => {

    const [imgProfile, setImgProfile] = React.useState(profile);
    const { setAutenticar } = React.useContext(Context);
    const navigate = useNavigate();

    const deslogar = () => {
        setAutenticar(false);
        navigate('/');
    }

    const handleChangeImg = (imgFile) => {
        setImgProfile(URL.createObjectURL(imgFile));
    }

    // React.useEffect(() => {
    //     console.log('atualizou')
    // }, [imgProfile])

    return (
        <section className='usuarioContainerBg'>
            <div className='usuarioContainer'>
                <div className='usuarioFoto'>
                    <div className='usuarioFotoImg'>
                        <img src={imgProfile} alt="Foto de perfil" />
                    </div>
                    <label htmlFor='escolherImagem'>Escolha a imagem</label>
                    <input id='escolherImagem' accept='image/*' style={{ visibility: "hidden" }} type="file" onChange={(event) => handleChangeImg(event.target.files[0])} />
                </div>
                <div className="usuarioPerfil">bloco2</div>
                <div className='usuarioTexto'>bloco3</div>
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
        </section>
    )
}
