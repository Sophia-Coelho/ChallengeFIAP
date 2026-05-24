import TituloSubtitulo from "../TituloSubtitulo";
import "./painel.css";
import Navbar from "../Navbar";

/* ---------------------------------------------------
   CardInfo: substitui CardGraphPainel nesta seção.
   Recebe: titulo, descricao, fonteNome, link
--------------------------------------------------- */
function CardInfo({ titulo, descricao, fonteNome, link }) {
  return (
    <div className="card_info">
      {titulo && <p className="card_info__titulo">{titulo}</p>}
      <p className="card_info__descricao">{descricao}</p>
      {fonteNome && link && (
        <a
          className="card_info__fonte"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fonte: {fonteNome} ↗
        </a>
      )}
    </div>
  );
}

export default function Painel() {
  const painelData = {
    titulo: "Números que não mentem",
    subtitulo:
      "Explore as evidências científicas sobre o impacto do uso de anabolizantes — dos riscos cardíacos à dependência psicológica.",
    variante: "claro",
  };

  const novosCardsInformacao = [
    {
      titulo: "Baixa mortalidade direta, alto risco indireto",
      descricao:
        "As mortes relacionadas a esteroides são subnotificadas. A maioria dos óbitos decorre de eventos cardiovasculares, não de toxicidade aguda.",
    },
    {
      titulo: "Jovens enfrentam riscos a longo prazo",
      descricao:
        "Usuários de 20 a 29 anos apresentam as maiores taxas de uso e o aumento mais acentuado de eventos cardíacos em uma década.",
    },
    {
      titulo: "A dependência psicológica é real",
      descricao:
        "30% dos usuários de longo prazo desenvolvem dismorfia corporal e dependência psicológica, dificultando a interrupção do uso.",
    },
    {
      titulo: "Prevenção pela educação",
      descricao:
        "Estudos mostram que a educação baseada em dados reduz o primeiro uso em até 40% em grupos de risco.",
    },
  ];

  const cardsGraph = [
    {
      titulo: "Perigo para o Coração",
      descricao:
        "Infarto: Usuários têm 3× mais risco de sofrer um ataque cardíaco.\nCardiomiopatia: O risco de desenvolver danos graves na musculatura do coração é quase 9× maior.",
      fonteNome: "Associação Americana do Coração, revista Circulation",
      link: "https://www.ahajournals.org/journal/circ",
    },
    {
      titulo: "Um Problema em Crescimento",
      descricao:
        "Estima-se que 3,3% da população geral faça uso dessas substâncias (6,4% dos homens e 1,6% das mulheres).\nO uso chega a 13,4% entre atletas e a impressionantes 18,4% entre praticantes de atividade física.",
      fonteNome: "Sociedade Brasileira de Endocrinologia e Metabologia",
      link: "https://www.endocrino.org.br/",
    },
    {
      titulo: "Comportamento de Risco",
      descricao:
        "O uso de esteroides está fortemente associado ao abuso de outras substâncias. Quem consome anabolizantes tem uma frequência muito maior de dependência de álcool, nicotina e cocaína.",
      fonteNome: "Sociedade Brasileira de Endocrinologia e Metabologia",
      link: "https://www.endocrino.org.br/",
    },
    {
      titulo: "Efeitos Irreversíveis em Mulheres",
      descricao:
        "Marcas da masculinização podem ser permanentes: engrossamento definitivo da voz, hipertrofia do clitóris e crescimento de pelos faciais.\nAumento da resistência à insulina e risco de ruptura dos tendões chega a ser 9× maior.",
      fonteNome: "Scielo, 2014 e SBEM, 2022",
      link: "https://www.scielo.br/",
    },
  ];

  return (
    <section id="painel" className="painel_page">
      <TituloSubtitulo
        titulo={painelData.titulo}
        subtitulo={painelData.subtitulo}
        variante={painelData.variante}
      />

      <div className="secao_midia_dados">

          {/* Vídeo */}
          <div className="video_container_painel">
            <iframe
              src="https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI"
              title="Vídeo Informativo sobre Anabolizantes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Cards com scroll */}
          <div className="scroll_cards_painel">
            {novosCardsInformacao.map((card, i) => (
              <CardInfo key={i} titulo={card.titulo} descricao={card.descricao} />
            ))}
            {cardsGraph.map((card, i) => (
              <CardInfo
                key={i + novosCardsInformacao.length}
                titulo={card.titulo}
                descricao={card.descricao}
                fonteNome={card.fonteNome}
                link={card.link}
              />
            ))}
          </div>

      </div>
    </section>
  );
}