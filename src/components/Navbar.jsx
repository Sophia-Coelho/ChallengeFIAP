import { useState } from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/favicon.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <a className="logo" href="#">
                    <img src={logoIcon} alt="Logo" className="logo-icon" />
                    <span className="logo-text">Juicers</span>
                </a>
                <ul className="menu_list">
                    <li><a href="#painel">Menu</a></li>
                    <li><a href="#projeto">Sobre o Projeto</a></li>
                    <li><Link className="btn-login" to="/login">Login</Link></li>
                </ul>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span /><span /><span />
                </div>
            </nav>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <a href="#painel">Menu</a>
                <a href="#projeto">Sobre o Projeto</a>
                <a className="btn-login" href="/login">Login</a>
            </div>
        </>
    )
}