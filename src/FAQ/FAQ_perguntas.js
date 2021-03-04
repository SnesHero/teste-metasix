import React, { useEffect, useState } from "react";
import "../App.css";
import "./FAQ";
import APIdata from "./useFAQ_perguntas";
import Axios from 'axios';

function FAQ_perguntas() {
  const [texto, setTexto] = useState("testezin");
  const [ordem, setOrdem] = useState([1]);
  const [resposta, setResposta] = useState("resposta");
  const [toggle, setToggle] = useState(false);

  const mostra_resposta = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    Axios.get('https://poc.metasix.solutions/parse/classes/FAQ',
    { headers: {'X-Parse-Application-Id': 'br.com.metasix.poc'}}).then((res) => {
      const APIresponse = (res.data);
      console.log(APIresponse);
    });
  }, []);

  return (
    <div>
      <div className="Faq-perguntas">
        <div onClick={mostra_resposta}>{texto}</div>
        <div>{ordem}</div>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
      <div>{toggle ? <input value={resposta}></input> : null}</div>
      
    </div>
    
  );
}

export default FAQ_perguntas;
