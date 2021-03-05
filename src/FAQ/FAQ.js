import "../App.css";
import FAQ_perguntas from "./FAQ_perguntas.js";
import useFAQ_perguntas from "./useFAQ_perguntas";
import FAQ_menu from "./FAQ_menu";

function FAQ() {
  const { perguntas } = useFAQ_perguntas();

  return (
    <div>
      <div className="Faq-header">
        <h1>FAQ - Perguntas Frequentes</h1>
        <input></input>
      </div>

      <FAQ_menu/>

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
