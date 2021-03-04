import { useEffect, useState } from "react";
import Axios from "axios";
import "./FAQ";
import "./FAQ_perguntas.js";

const setData = "";

function APIdata() {
  const [texto, setTexto] = useState("testezin");
  const [ordem, setOrdem] = useState([1]);
  const [resposta, setResposta] = useState("resposta");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    Axios.get("https://poc.metasix.solutions/parse/classes/FAQ", {
      headers: { "X-Parse-Application-Id": "br.com.metasix.poc" },
    }).then((res) => {
      setData(res.data);
      console.log("pirocas");
    });
  }, []);
  return {
    texto,
    ordem,
    resposta,
  };
}

export default APIdata;
