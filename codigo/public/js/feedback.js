
function mostrarFeedback(msg) {
  const feedback = document.getElementById("feedback");
  feedback.innerText = msg;
  feedback.style.display = "block";
  setTimeout(() => feedback.style.display = "none", 3000);
}
