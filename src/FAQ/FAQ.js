import "../App.css";
import FAQ_perguntas from "./FAQ_perguntas.js";
import useFAQ_perguntas from "./useFAQ_perguntas";
import FAQ_menu from "./FAQ_menu";

function FAQ() {
  const { perguntas } = useFAQ_perguntas();

  return (
    <div>
      <div className="Faq-header">
        <div className="Faq_header_title">FAQ - Perguntas Frequentes</div>
        <div className="Faq_header_item">
          <input></input> 
          <div className="Faq_search_button">BUSCAR</div>
        </div>
      </div>

      <FAQ_menu />

      {perguntas?.map((pergunta) => (
        <div>
          <FAQ_perguntas
            texto={pergunta.question}
            resposta={pergunta.answer}
            ordem={pergunta.position}
          />
        </div>
      ))}
    </div>
  );
}

export default FAQ;
