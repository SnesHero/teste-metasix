import "./App.css";
import { useState } from "react";

function Menu() {

  const [selected, useSelected] = useState("B");


  return (
    <div className="Menu">
      <div className="MenuItem">HOME</div>
      <div className="MenuFAQItem">FAQ</div>
      <div className="MenuItem">LOCAIS</div>
      <div className="MenuItem">CATEGORIAS</div>
    </div>
  );
}

export default Menu;
