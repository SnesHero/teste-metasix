import "../App.css";
import "./FAQ";
import "./FAQ_perguntas";

function FAQ_menu() {
  return (
    <div className="Faq-menu">
      <div className="Faq-menu-title">Pergunta</div>
      <div className="Faq-menu-info">
        <div className="Pointer">
          <i class="fas fa-plus-circle"></i> &nbsp; Nova Pergunta
        </div>
        | Ordem | Editar | Excluir
      </div>
    </div>
  );
}

export default FAQ_menu;
