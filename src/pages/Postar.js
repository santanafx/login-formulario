import React from 'react'
import './Postar.css'
import imgAdd from '../images/add-img.png'
import { AiOutlineEdit } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { Context } from '../context/globalContext';

export const Postar = () => {

    const { allPosts, setAllPosts, usuarioLogado, setPostId } = React.useContext(Context);
    const [imgPost, setImgPost] = React.useState(imgAdd);
    const [comentario, setComentario] = React.useState('');

    const handleChangeImg = (imgFile) => {
        setImgPost(URL.createObjectURL(imgFile));
    }

    const handleChangeComentario = (event) => {
        setComentario(event);
    }

    const comentar = () => {
        let novoPost = {
            idComentario: allPosts.length,
            foto: imgPost,
            comentario: comentario,
            profile: usuarioLogado.profile,
            nome: usuarioLogado.nome,
        }
        setAllPosts([...allPosts, novoPost]);
        setPostId(allPosts.length);
        console.log(allPosts)
    }

    return (
        <section className='postarContainerBg'>
            <div className='postarContainer'>

                <div className="postarFoto">
                    <div className='postarImg'>
                        <img src={imgPost} alt="Foto para adicionar post" />
                    </div>
                    <label htmlFor='escolherImagemPost'><AiOutlineEdit />Escolha a imagem</label>
                    <input id='escolherImagemPost' accept='image/*' style={{ visibility: "hidden" }} type="file" onChange={(event) => handleChangeImg(event.target.files[0])} />
                </div>

                <div className='comentarioContainer'>
                    <textarea cols="100" rows="7"
                        onBlur={(event) => { setComentario(event.target.value); }} type="text"
                        onChange={(event) => handleChangeComentario(event.target.value)} value={comentario} />
                    <button onClick={() => comentar()}><MdPostAdd /> Comentar</button>
                </div>

            </div>

        </section>
    )
}
