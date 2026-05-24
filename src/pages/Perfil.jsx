import { useState } from 'react'
import Topbar from '../components/Topbar'
import CardMetrica from '../components/perfilDoUsuario/CardMetrica'
import CardChart from '../components/perfilDoUsuario/CardChart'
import CardAlertasExamesInsights from '../components/perfilDoUsuario/CardAlertasExamesInsights'
import { MOCK_DATA } from '../data/mockData'
import '../style/perfil.css'
import HistoricoExames from '../components/HistoricoExames'
import DadosDaConta from '../pages/DadosConta'

export default function Perfil() {
    const { perfil, metricas, alertas } = MOCK_DATA
    const [contaAberta, setContaAberta] = useState(false)

    return (
        <div className="shell">
            <Topbar perfil={perfil} />
            <div className="main">
                <div className="content">

                    <div className="page-header">
                        <div>
                            <h1 className="page-title">Olá, {perfil.nome.split(' ')[0]}</h1>
                            <p className="page-sub">
                                {perfil.idade} anos · Ciclo ativo há {perfil.tempoUso} · {perfil.dosagem}
                            </p>
                        </div>
                    </div>

                    <div className="perfil-collapse">
                        <button
                            className={`perfil-collapse-btn${contaAberta ? ' perfil-collapse-btn--open' : ''}`}
                            onClick={() => setContaAberta(v => !v)}
                        >
                            <span className="perfil-collapse-label">
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="8" cy="5.5" r="3" />
                                    <path d="M2 14.5c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                                </svg>
                                Dados da conta
                            </span>
                            <svg
                                className="perfil-collapse-chevron"
                                width="14" height="14" viewBox="0 0 16 16"
                                fill="none" stroke="currentColor" strokeWidth="1.8"
                            >
                                <path d="M4 6l4 4 4-4" />
                            </svg>
                        </button>

                        <div className={`perfil-collapse-body${contaAberta ? ' perfil-collapse-body--open' : ''}`}>
                            <div className="perfil-collapse-inner">
                                <DadosDaConta embedded />
                            </div>
                        </div>
                    </div>

                    <div className="metrics-row">
                        {metricas.map(m => (
                            <CardMetrica key={m.id} {...m} />
                        ))}
                    </div>

                    <div className="grid-main">
                        <CardChart />
                        <CardAlertasExamesInsights alertas={alertas} />
                    </div>

                </div>
            </div>
            <HistoricoExames />
        </div>
    )
}