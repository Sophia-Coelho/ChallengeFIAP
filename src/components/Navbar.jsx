import { useState } from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo-nome.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <a className="logo" href="/">
                    <img src={logoIcon} alt="Logo" className="logo-icon" />
                </a>
                <ul className="menu_list">
                    <li><a href="/">Menu</a></li>
                    <li><a href="/sobre">Sobre o Projeto</a></li>
                    <li><Link className="btn-login" to="/login">Login</Link></li>
                </ul>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span /><span /><span />
                </div>
            </nav>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <a href="/">Menu</a>
                <a href="/sobre">Sobre o Projeto</a>
                <a className="btn-login" href="/login">Login</a>
            </div>
        </>
    )
}