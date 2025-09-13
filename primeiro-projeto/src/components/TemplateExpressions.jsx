import React from "react";

export const TemplateExpressions = () => {
  // Aqui vai códigos JS

  let nome = "Pablo Escobar";

  let droga = {
    nome: "cocaina",
    peso: 53, //gramas
    valor: 20.0,
    cor: "branco",
  };

  return (
    // Aqui vai o seu HTML

    <div>
      <h2>Hola amiguito, mi nombre és {nome}</h2>
      <p>
        E, trafico {nome.droga}, em peso de {peso.droga} o valor é R$
        {valor.droga} de cor {cor.droga}
      </p>
    </div>
  );
};

// export default TemplateExpressions
