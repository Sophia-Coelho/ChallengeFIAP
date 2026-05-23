import Contextualizacao from "../components/sobreProjeto/Contextualizacao";
import Time from "../components/sobreProjeto/Time"
import StacksUsadas from "../components/sobreProjeto/StacksUsadas"

import "../style/sobre.css";
import "../style/cardMembros.css";
import "../style/stacksUsadas.css"
import "../style/contextualizacao.css"

export default function Layout() {
    return (
        <div className="sobre-pagina">

          <Contextualizacao />  
          <Time />  
          <StacksUsadas />

        </div>
    );
}
