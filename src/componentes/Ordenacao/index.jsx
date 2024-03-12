import { useState } from "react";
import "./styles.css";

export default function Ordenacao() {
  const [linkAtivo, setLinkAtivo] = useState("Recentes");

  const handleClick = (nome) => {
    setLinkAtivo(nome);
  };

  return (
    <ul className="lista-ordenacao">
      <li>
        <a
          href="#"
          className={`lista-ordenacao__link ${
            linkAtivo === "Recentes" ? "lista-ordenacao__link--ativo" : ""
          }`}
          onClick={() => handleClick("Recentes")}
        >
          Recentes
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`lista-ordenacao__link ${
            linkAtivo === "Ver mais" ? "lista-ordenacao__link--ativo" : ""
          }`}
          onClick={() => handleClick("Ver mais")}
        >
          Ver mais
        </a>
      </li>
    </ul>
  );
}
