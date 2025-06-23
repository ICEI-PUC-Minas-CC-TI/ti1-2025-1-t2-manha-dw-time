
function aplicarTema() {
  const tema = localStorage.getItem("tema") || "claro";
  if (tema === "escuro") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

function alternarTema() {
  const temaAtual = localStorage.getItem("tema") || "claro";
  const novoTema = temaAtual === "claro" ? "escuro" : "claro";
  localStorage.setItem("tema", novoTema);
  aplicarTema();
}

// Aplica o tema assim que a página carrega
document.addEventListener("DOMContentLoaded", aplicarTema);
