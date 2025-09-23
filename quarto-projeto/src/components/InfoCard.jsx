// Importação do hook para pegar os parametros da url
import { useParams } from "react-router-dom";

const InfoCard = () => {
  //Guarda o parametro id em uma variável
  const { id } = useParams();

  return (
    <div>
      {/* Mostra um texto junto com o valor do 
        parametro enviado na url  */}
      <h1>INFOCARD DE NÚMERO: {id}</h1>
    </div>
  );
};

export default InfoCard;