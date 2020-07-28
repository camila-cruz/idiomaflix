import React from 'react';
import Logo from '../../assets/logo.png';
import './index.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

export default function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="Logotipo do Idiomaflix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}