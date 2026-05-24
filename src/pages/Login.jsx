import { useState } from 'react'
import '../style/login.css'
import { Link, useNavigate } from 'react-router-dom'
import logoIcon from '../assets/favicon.png'

export default function Login() {
    const navigate = useNavigate()

    const [modoCadastro, setModoCadastro] = useState(false)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    function limparCampos() {
        setNome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
    }

    function abrirCadastro() {
        limparCampos()
        setModoCadastro(true)
    }

    function abrirLogin() {
        limparCampos()
        setModoCadastro(false)
    }

    function fazerCadastro() {
        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos.')
            return
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais.')
            return
        }

        const novoUsuario = {
            nome,
            email,
            senha
        }

        localStorage.setItem('usuarioCicloRisco', JSON.stringify(novoUsuario))
        localStorage.setItem('usuarioLogadoCicloRisco', JSON.stringify(novoUsuario))

        alert('Conta criada com sucesso!')
        navigate('/onboarding')
    }

    function fazerLogin() {
        if (!email || !senha) {
            alert('Preencha o e-mail e a senha.')
            return
        }

        const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioCicloRisco'))

        if (!usuarioSalvo) {
            alert('Nenhuma conta cadastrada. Crie uma conta primeiro.')
            return
        }

        if (usuarioSalvo.email !== email || usuarioSalvo.senha !== senha) {
            alert('E-mail ou senha incorretos.')
            return
        }

        localStorage.setItem('usuarioLogadoCicloRisco', JSON.stringify(usuarioSalvo))

        navigate('/perfil')
    }

    return (
        <div className="login_wrap">

            <div className="login_left">
                <div className="login_logo">
                    <img src={logoIcon} alt="Logo" className="logo-icon" />
                    <span className="login_logo_text">Juicers</span>
                </div>

                <div className="login_left_middle">
                    <h1 className="login_left_headline">
                        Monitore o impacto<br /><em>no seu corpo.</em>
                    </h1>

                    <p className="login_left_sub">
                        Acompanhe exames, identifique riscos reais e entenda como os anabolizantes afetam sua saúde.
                    </p>
                </div>

                <div className="login_left_stats"></div>
            </div>

            <div className="login_right">
                <div className="login_card">

                    {!modoCadastro ? (
                        <>
                            <p className="login_card_title">Entrar</p>
                            <p className="login_card_sub">
                                Acesse sua conta para visualizar seus dados.
                            </p>

                            <div className="field">
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="field">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <a href="#" className="forgot">Esqueci minha senha</a>

                            <button
                                className="btn_entrar"
                                onClick={fazerLogin}
                            >
                                Entrar
                            </button>

                            <div className="divider"><span>ou</span></div>

                            <Link to="/" className="btn_voltar">
                                ← Voltar para o site
                            </Link>

                            <p className="login_card_footer">
                                Não tem conta?{' '}
                                <button
                                    type="button"
                                    className="link_button"
                                    onClick={abrirCadastro}
                                >
                                    Cadastre-se
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="login_card_title">Criar conta</p>
                            <p className="login_card_sub">
                                Preencha seus dados para começar.
                            </p>

                            <div className="field">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className="field">
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="field">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <div className="field">
                                <label>Confirmar senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn_entrar"
                                onClick={fazerCadastro}
                            >
                                Criar conta
                            </button>

                            <div className="divider"><span>ou</span></div>

                            <button
                                type="button"
                                className="btn_voltar"
                                onClick={abrirLogin}
                            >
                                ← Já tenho conta
                            </button>

                            <p className="login_card_footer">
                                Ao cadastrar, você concorda com os <a href="#">Termos de Uso</a>.
                            </p>
                        </>
                    )}

                </div>
            </div>

        </div>
    )
}