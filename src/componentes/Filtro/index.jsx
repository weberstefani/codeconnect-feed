import PropTypes from "prop-types";
import { useState } from "react";
import "./styles.css";

export default function Filtro({ setPesquisa }) {
  const [filtros, setFiltros] = useState([]);

  const limparFiltros = () => {
    setFiltros([]);
    setPesquisa("");
  };

  return (
    <section className="container-filtro">
      <ul>
        {filtros.map((filtro, index) => (
          <li key={index}>{filtro}</li>
        ))}
      </ul>

      <button onClick={limparFiltros}>Limpar tudo</button>
    </section>
  );
}

Filtro.propTypes = {
  setPesquisa: PropTypes.func.isRequired,
};
