function CardMembros({ membro }) {
  return (
    <div className="member-card h-100">

      <div className="text-center">

        <img
          src={membro.img}
          alt={membro.nome}
          className="membro-img"
        />

        <h3>{membro.nome}</h3>

        <span className="membro-descricao">
          {membro.titulo}
        </span>

        <p>
          {membro.descricao}
        </p>

      </div>

    </div>
  );
}

export default CardMembros;