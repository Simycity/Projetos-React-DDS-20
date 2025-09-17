import { useState } from "react";

export const Listagem = () => {
  const [lista, setLista] = useState([
    "Pedro",
    "Cris",
    "Manoel",
    "Altair",
    "Moacyr",
  ]);

  const [jogadores] = useState([
    { id: 1, nome: "Robo", time: "LOUD", campeao: "Olaf" },
    { id: 2, nome: "Rout", time: "LOUD", campeao: "Xayah" },
    { id: 3, nome: "Sephis", time: "LOUD", campeao: "Akali" },
  ]);

  const [numero, setNumero] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setNumero(numero + 1);
          console.log([...lista]);
          setLista([...lista, numero]);
        }}
      >
        Adicionar na lista
      </button>
      <h2>Listagem</h2>
      <ul>
        <li>João Lucas</li>
        <li>Marcelo</li>
        {lista.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
      {/* Usando o .map pra percorrer o array, e criar novos elementos HTML com base na lista */}
      <h2>Lista de Jogadores</h2>
      {jogadores.map((jogador) => (
        <h3 key={jogador.id}>
          O jogador {jogador.nome} joga(ou) no time {jogador.time} com o
          campeão: {jogador.campeao}
        </h3>
      ))}
      ;
    </div>
  );
};
