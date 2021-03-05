import React, { useEffect, useState } from "react";
import "../App.css";
import "./FAQ";
import useFAQ_perguntas from "./useFAQ_perguntas";
import Axios from "axios";

function FAQ_perguntas({texto, ordem, resposta,}) {
  const [toggle, setToggle] = useState(false);

  const mostra_resposta = () => {
    setToggle(!toggle);
  };

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
