import React, { useEffect, useState } from "react";
import "../App.css";
import "./FAQ";
import useFAQ_perguntas from "./useFAQ_perguntas";
import Axios from "axios";

function FAQ_perguntas({ texto, ordem, resposta }) {
  const [toggle, setToggle] = useState(false);

  const mostra_resposta = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="Faq-perguntas">
        <div onClick={mostra_resposta} className="Titulo-pergunta">
          {texto}
        </div>
        <div className="Icones">
          <div className="Icon-item">{ordem}</div>
          <div className="Edit-icon"> <i class="fas fa-edit" ></i> </div>
          <div className="Trash-icon"><i class="fas fa-trash" ></i></div>
        </div>
      </div>
      <div>{toggle ? <div>{resposta}</div> : null}</div>
    </div>
  );
}

export default FAQ_perguntas;
