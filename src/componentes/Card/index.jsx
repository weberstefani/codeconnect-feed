import PropTypes from "prop-types";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import "./styles.css";

export default function Card({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card" key={id} id={`card-${id}`}>
      <div className="card__imagem">
        <img src={imagemUrl} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {comentarios}
            </li>
          </ul>

          <div className="rodape__usuario">
            <img src={usuario ? usuario.imagem : ""} alt="imagem do usuário" />
            {usuario ? usuario.nome : ""}
          </div>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imagemUrl: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  resumo: PropTypes.string.isRequired,
  linhasDeCodigo: PropTypes.number.isRequired,
  compartilhamentos: PropTypes.number.isRequired,
  comentarios: PropTypes.number.isRequired,
  usuario: PropTypes.shape({
    imagem: PropTypes.string,
    nome: PropTypes.string,
  }).isRequired,
};
