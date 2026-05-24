import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout' 

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Perfil from './pages/Perfil'
import Onboarding from './pages/Onboarding'
import HistoricoExames from './pages/HistoricoExames'
import DadosConta from './pages/DadosConta'

import AccessibilityMenu from './components/Acessibilidade/AccessibilityMenu'
import LeitorDeAudio from './components/LeitorDeAudio/AudioReader'

export default function App() {
    const [mostrarLeitor, setMostrarLeitor] = useState(false)

    return (
        <>
            <Routes>
                <Route element={
                    <>
                        <Navbar />
                        <Outlet /> 
                        <Footer />
                    </>
                }>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/historico" element={<HistoricoExames />} />
                <Route path="/conta" element={<DadosConta />} />
            </Routes>

            {/* Componentes de acessibilidade trazidos da main */}
            <AccessibilityMenu
                onOpenAudioReader={() => setMostrarLeitor(true)}
            />

            {mostrarLeitor && (
                <LeitorDeAudio
                    onClose={() => setMostrarLeitor(false)}
                />
            )}
        </>
    )
}
