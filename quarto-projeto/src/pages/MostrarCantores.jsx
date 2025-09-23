import { useState } from "react";

import CardCantor from "../components/CardCantor";

const MostrarCantores = () => {
  // Lista de cantores vinda do banco
  const [cantores] = useState([
    {
      id: 1,
      nome: "DJ Cleiton Rasta",
      genero: "Reagge",
      premioMelhor: false,
      posicao: 100,
    },
    {
      id: 2,
      nome: "Michael Jackson",
      genero: "Pop",
      premioMelhor: true,
      posicao: 1,
    },
    { id: 3, nome: "MC Ratão", genero: "Rap", premioMelhor: true, posicao: 75 },
  ]);

  return (
    <div>
      <h1>Mostrar Cantores</h1>
      {cantores.map((cantor) => (
        <CardCantor
          key={cantor.id}
          name={cantor.nome}
          gender={cantor.genero}
          thebest={cantor.premioMelhor}
          position={cantor.posicao}
        />
      ))}
      {/* UTILIZE A DESESTRUTURAÇÃO PARA FAZER AS INFORMAÇÕES DO CANTOR APARECER LÁ NO COMPONENTE CARDCANTOR, QUE NEM FIZ NO SHOWDOIS */}
    </div>
  );
};

export default MostrarCantores;