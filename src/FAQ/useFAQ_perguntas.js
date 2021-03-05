import { useEffect, useState } from "react";
import Axios from "axios";
import "./FAQ";
import "./FAQ_perguntas.js";

const setData = "";

function useFAQ_perguntas() {
  
  const [perguntas, setPerguntas] = useState([]);
  const [texto, setTexto] = useState("testezin");
  const [ordem, setOrdem] = useState(1);
  const [resposta, setResposta] = useState("resposta");

  useEffect(() => {
    Axios.get("https://poc.metasix.solutions/parse/classes/FAQ", {
      headers: { "X-Parse-Application-Id": "br.com.metasix.poc" },
    }).then((res) => {
      const APIresponse = res.data.results;
      setPerguntas(APIresponse);
    });
  }, []);
  console.log(perguntas[0]?.question);

  

  return {
    perguntas,
    texto,
    ordem,
    resposta,
  };
}

export default useFAQ_perguntas;
