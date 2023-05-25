import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { MdOutlineLogin, MdHome, MdArticle } from "react-icons/md";

export const NavBar = () => {
    return (
        <section className='navBarContainerBg'>
            <nav className='navBarContainer'>
                <div className='navBarLogin'>
                    <MdHome />
                    <Link to='/'>Início</Link>
                </div>
                <div className='navBarLogin'>
                    <MdOutlineLogin />
                    <Link to='/login'>Login</Link>
                </div>
                <div className='navBarLogin'>
                    <MdArticle />
                    <Link to='/sobre'>Sobre</Link>
                </div>
            </nav>
        </section>
    )
}
