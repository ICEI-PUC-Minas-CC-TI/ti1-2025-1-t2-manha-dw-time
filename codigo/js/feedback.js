function mostrarFeedback(mensagem, tipo = "sucesso") {
  const feedback = document.createElement("div");
  feedback.textContent = mensagem;
  feedback.style.position = "fixed";
  feedback.style.top = "20px";
  feedback.style.right = "20px";
  feedback.style.padding = "10px";
  feedback.style.background = tipo === "sucesso" ? "#4CAF50" : "#F44336";
  feedback.style.color = "white";
  document.body.appendChild(feedback);
  setTimeout(() => feedback.remove(), 3000);
}