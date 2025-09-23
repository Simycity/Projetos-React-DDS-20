import React from "react";

// Utiliza as props, mas agora com desestruturação, separando as propriedades
const ShowDois = ({ time, pais, posicao }) => {
  return (
    <div style={{ backgroundColor: "red", color: "white", width:"500px" }}>
      <h1>ShowDois</h1>
      <h2>O time atual é: {time}</h2>
      <h2>Fica no país: {pais}</h2>
      <h2>E a posição na tabela é {posicao}</h2>
    </div>
  );
};

export default ShowDois;