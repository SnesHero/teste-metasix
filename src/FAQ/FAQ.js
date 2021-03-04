import "../App.css";
import FAQ_perguntas from "./FAQ_perguntas.js";

function FAQ() {
  return (
    <div>
      <div className="Faq-header">
        <h1>FAQ - Perguntas Frequentes</h1>
        <input></input>
      </div>

      <div className="Faq-menu">
        Pergunta | Nova Pergunta | Ordem | Editar | Excluir
      </div>

      <FAQ_perguntas/>

      
    </div>
  );
}

export default FAQ;
