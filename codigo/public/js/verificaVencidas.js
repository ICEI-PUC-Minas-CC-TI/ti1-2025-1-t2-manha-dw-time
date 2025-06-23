
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
(function(){
  emailjs.init("tGZmLwteYCdQa0jlM");
})();

async function verificarTarefasVencidas() {
  const hoje = new Date().toISOString().split('T')[0];
  const res = await fetch("http://localhost:3000/tarefas");
  const tarefas = await res.json();

  tarefas.forEach(async (t) => {
    if (t.data < hoje && !t.notificada && !t.concluida) {
      await emailjs.send("service_lgll52b", "template_yevzlha", {
        nome: t.usuario || "Usuário",
        tarefa: t.titulo,
        data: t.data
      });

      // Marcar como notificada para não reenviar
      await fetch(`http://localhost:3000/tarefas/${t.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notificada: true })
      });
    }
  });
}

// Executar a cada 30 segundos
setInterval(verificarTarefasVencidas, 30000);
</script>
