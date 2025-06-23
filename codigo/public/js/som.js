
function tocarSom(tipo) {
  const som = new Audio(tipo === 'concluir' ? 'sounds/done.mp3' : 'sounds/click.mp3');
  som.play();
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button, .concluir-btn, .excluir-btn').forEach(btn => {
    btn.addEventListener('click', () => tocarSom('click'));
  });
});
