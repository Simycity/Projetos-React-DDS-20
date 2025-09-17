import { useState } from 'react'

export const Varia = () => {
    //Variável padrão
    let itgo = "Shazam";
    let numero = 11

    //Variável com hoook useState
    const [number, setNumber] = useState(9);
    const [hero, setHero] = useState("Omni-Man");

  return (
    <div>
        {/* Uso de Variáveis Padrão */}
        <p>A palavra sorteada foi: {itgo}</p>
        <h1>{numero}</h1>

        <button onClick={() => {numero++}}>Aumentar Contagem</button>

        {/* Uso de Variáveis a partir de Agora */}
        <h1>{number}</h1>
        <button onClick={() => {setNumber(number + 2)}}> + </button>
        <button onClick={() => {setNumber(9)}}> Resetar </button>
        <button onClick={() => {setNumber(number - 2)}}> / </button>

        {/* Título com nome de Herói */}
        {/* Um botão que revele quem ele é ao ser clicado */}
        <h1>{hero}</h1>
        <button onClick={() => {setHero("Nolan Grayson")}}>
            Revelar
        </button>
        
    </div>
  )
}
