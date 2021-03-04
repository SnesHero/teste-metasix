import React, { useEffect, useState } from "react";
import "../App.css";
import "./FAQ";
import APIdata from "./APIdata";
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
      console.log(res.data);
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
      <button onClick={APIdata}>APIteste</button>
  
    </div>
    
  );
}

export default FAQ_perguntas;
