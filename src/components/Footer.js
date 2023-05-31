import React from 'react'
import './Footer.css'
import { BsDiscord, BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <section className='footerContainerBg'>
            <footer className='footerContainer'>
                <p>Projeto | <span style={{ color: 'white' }}>login-formulário</span> </p>
                <span>O projeto login-formulário, tem o objetivo de utilizar React para construir um app de cadastro e login.</span>
                <div className='footerIcons'>
                    <Link to='https://wa.me/5531997915854'><BsWhatsapp className='wp' /></Link>
                    <Link to='https://github.com/santanafx'><BsGithub className='gh' /></Link>
                    <Link to='https://discordapp.com/users/254746660549296128'><BsDiscord className='dis' /></Link>
                    <Link to='https://www.linkedin.com/in/lucas-santana-figueiredo/'><BsLinkedin className='lin' /></Link>
                </div>
                <small className='footerAutor'>&copy; Copyright 2023, Lucas Santana Figueiredo</small>
            </footer>
        </section>
    )
}
