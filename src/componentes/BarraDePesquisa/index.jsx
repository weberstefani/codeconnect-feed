import PropTypes from "prop-types";
import "./styles.css";

export default function BarraDePesquisa({ pesquisa, setPesquisa }) {
  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
    />
  );
}

BarraDePesquisa.propTypes = {
  pesquisa: PropTypes.string.isRequired,
  setPesquisa: PropTypes.func.isRequired,
};
