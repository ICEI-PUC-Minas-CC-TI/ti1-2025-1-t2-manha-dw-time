
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
(function(){
  emailjs.init("tGZmLwteYCdQa0jlM");
})();

function enviarEmailCriacao(nome, tarefa, data) {
  emailjs.send("service_lgll52b", "template_yevzlha", {
    nome: nome,
    tarefa: tarefa,
    data: data
  });
}
</script>
