import React from "react";

import ImgCdz from '../assets/cavaleiros-do-zodiaco.jpg'
import ImgCdD from "../../public/caverna-dragao.jpg";



export const MostrarImagens = () => {

  return (
    <div>
      {/* Imagens via link externo */}
      <h3>He-Man</h3>
      <img
        src="https://saopauloparacriancas.com.br/wp-content/uploads/2023/03/Sp_criancas_He_Man_Reproducao_Mattel_Television.jpg"
        alt="He-Man"
        width={900}
        height={500}
      />

      {/* Imagens via pasta assets */}
      <h3>Os Cavaleiros do Zodíaco</h3>
      <img src={ImgCdz} alt="Os Cavaleiros do Zodíaco" width={900} height={500}/>


      {/* Imagens via pasta public */}
      <h3>A Caverna do Dragão</h3>
      <img src={ImgCdD} alt="Caverna do Dragão" width={900} height={500}/>
    </div>
  );
};
