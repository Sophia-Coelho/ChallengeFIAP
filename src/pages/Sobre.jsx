import StacksUsadas from "../components/sobreProjeto/StacksUsadas"
import Time from "../components/sobreProjeto/Time"

import "../style/sobre.css";
import "../style/cardMembros.css";
import "../style/stacksUsadas.css"

export default function Layout() {
    return (
        <div className="sobre-pagina">

          <Time />  
          <StacksUsadas />

        </div>
    );
}
