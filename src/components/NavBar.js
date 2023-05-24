import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { MdOutlineLogin } from "react-icons/md";

export const NavBar = () => {
    return (
        <section className='navBarContainerBg'>
            <nav className='navBarContainer'>
                <div className='navBarLogin'>
                    <MdOutlineLogin />
                    <Link to='/'>Login</Link>
                </div>
                <Link to='/sobre'>Sobre</Link>
            </nav>
        </section>
    )
}
