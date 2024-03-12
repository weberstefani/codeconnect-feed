import { useEffect, useState } from "react";
import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Card from "./componentes/Card";
import Filtro from "./componentes/Filtro";
import Ordenacao from "./componentes/Ordenacao";
import Sidebar from "./componentes/Sidebar";

function App() {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((dados) => setDados(dados))

      .catch((erro) => {
        console.log(erro);
        setErro(
          "Desculpe, ocorreu um erro ao carregar o conteúdo: " + erro.toString()
        );
      });
  });

  return (
    <>
      {erro && <p className="mensagem__erro">{erro}</p>}
      <div className="container">
        <Sidebar />
        <div>
          <BarraDePesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
          <Filtro setPesquisa={setPesquisa} />
          <Ordenacao />

          <ul className="lista__cards">
            {Array.isArray(dados) &&
              dados
                .filter((item) =>
                  item.titulo.toLowerCase().includes(pesquisa.toLowerCase())
                )
                .map((item, index) => (
                  <li key={(index, item.id)}>
                    <Card
                      id={item.id}
                      imagemUrl={item.imagem_capa}
                      titulo={item.titulo}
                      resumo={item.resumo}
                      linhasDeCodigo={item.linhas_de_codigo}
                      compartilhamentos={item.compartilhamentos}
                      comentarios={item.comentarios}
                      usuario={item.usuario}
                    />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default App;
