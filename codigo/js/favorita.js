
function animarFavorita(idCard) {
  const el = document.getElementById(idCard);
  if (el) {
    el.classList.add('favoritada-animada');
    setTimeout(() => el.classList.remove('favoritada-animada'), 1000);
  }
}
