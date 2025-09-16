import React from 'react'

export const Events = () => {

    const teste = (e) => {
        console.log("Funcionou sim, parabéns");

        // e = Propriedade do evento
        console.log(e);
        
    }

  return (
    <div>Events
        {/* Função Inline */}
        <button onClick={() => console.log("Cliquei")}>Clique Aqui</button>

        {/* Função externa ao elemento */}
        <button onClick={teste}>Aqui também</button>
    </div>
  )
}
