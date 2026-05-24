import Topbar from '../components/Topbar'
import CardMetrica from '../components/perfilDoUsuario/CardMetrica'
import CardChart from '../components/perfilDoUsuario/CardChart'
import CardAlertasExamesInsights from '../components/perfilDoUsuario/CardAlertasExamesInsights'
import { MOCK_DATA } from '../data/mockData'
import '../style/perfil.css'
import HistoricoExames from '../components/HistoricoExames'

export default function Perfil() {
    const { perfil, metricas, alertas } = MOCK_DATA

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