import "../App.css";
import FAQ_perguntas from "./FAQ_perguntas.js";
import useFAQ_perguntas from "./useFAQ_perguntas";

function FAQ() {
  const { perguntas } = useFAQ_perguntas();

  return (
    <div>
      <div className="Faq-header">
        <h1>FAQ - Perguntas Frequentes</h1>
        <input></input>
      </div>

      <div className="Faq-menu">
        Pergunta | Nova Pergunta | Ordem | Editar | Excluir
      </div>

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
