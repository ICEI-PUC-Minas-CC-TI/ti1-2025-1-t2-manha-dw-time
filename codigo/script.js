// Início do script.js
const url = 'http://localhost:3000/tarefas';

// Função para carregar tarefas com filtros
async function carregarTarefas(filtros = {}) {
  const params = new URLSearchParams(filtros);
  const response = await fetch(`${url}?${params}`);
  const tarefas = await response.json();
  exibirTarefas(tarefas);
}

// Função para exibir tarefas na lista
function exibirTarefas(tarefas) {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';
  tarefas.forEach(tarefa => {
    const item = document.createElement('li');
    item.innerHTML = `
      <strong>${tarefa.nome}</strong><br>
      Data: ${tarefa.data} | Importância: ${tarefa.importancia} | Categoria: ${tarefa.categoria}<br>
      <button onclick="editarTarefa(${tarefa.id})">Editar</button>
      <button onclick="deletarTarefa(${tarefa.id})">Excluir</button>
    `;
    lista.appendChild(item);
  });
}

// Função para filtrar tarefas
function filtrarTarefas() {
  const nome = document.getElementById('buscar').value;
  const categoria = document.getElementById('categoria').value;
  const importancia = document.getElementById('importancia').value;
  const data = document.getElementById('data').value;

  const filtros = {};
  if (nome) filtros.nome_like = nome;
  if (categoria) filtros.categoria = categoria;
  if (importancia) filtros.importancia = importancia;
  if (data) filtros.data = data;

  carregarTarefas(filtros);
}

// Manipulador de envio do formulário de tarefa
document.getElementById('form-tarefa').addEventListener('submit', async function (e) {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const nome = document.getElementById('nome').value;
  const data = document.getElementById('form-data').value;
  const importancia = document.getElementById('form-importancia').value;
  const categoria = document.getElementById('form-categoria').value;

  const tarefa = { nome, data, importancia, categoria };

  if (id) {
    await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefa)
    });
  } else {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefa)
    });
  }

  this.reset();
  filtrarTarefas();
});

// Função para editar tarefa
async function editarTarefa(id) {
  const response = await fetch(`${url}/${id}`);
  const tarefa = await response.json();

  document.getElementById('id').value = tarefa.id;
  document.getElementById('nome').value = tarefa.nome;
  document.getElementById('form-data').value = tarefa.data;
  document.getElementById('form-importancia').value = tarefa.importancia;
  document.getElementById('form-categoria').value = tarefa.categoria;
}

// Função para deletar tarefa
async function deletarTarefa(id) {
  if (confirm("Deseja realmente excluir esta tarefa?")) {
    await fetch(`${url}/${id}`, { method: 'DELETE' });
    filtrarTarefas();
  }
}

// Função para mostrar aba
function mostrarAba(id) {
  document.querySelectorAll('.aba').forEach(aba => aba.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  if (id === 'aba-relatorio') carregarRelatorio();
  if (id === 'aba-status') carregarStatus();
}

// Função para carregar relatório
async function carregarRelatorio() {
  const response = await fetch(url);
  const tarefas = await response.json();
  const lista = document.getElementById('relatorio-tarefas');
  lista.innerHTML = '';
  tarefas.forEach(tarefa => {
    const item = document.createElement('li');
    item.textContent = `• ${tarefa.nome} | ${tarefa.data} | ${tarefa.importancia} | ${tarefa.categoria}`;
    lista.appendChild(item);
  });
}

// Função para carregar status
async function carregarStatus() {
  const response = await fetch(url);
  const tarefas = await response.json();
  const lista = document.getElementById('status-tarefas');
  lista.innerHTML = '';

  const hoje = new Date().toISOString().split('T')[0];

  tarefas.forEach(tarefa => {
    const status = tarefa.data < hoje ? "Descumprida (vencida)" : "Pendente ou cumprida no prazo";
    const item = document.createElement('li');
    item.textContent = `• ${tarefa.nome} | Data: ${tarefa.data} | Status: ${status}`;
    lista.appendChild(item);
  });
}

// Função para carregar tarefas por tipo
async function carregarAbaTarefas(tipo) {
  const response = await fetch(url);
  const tarefas = await response.json();
  const hoje = new Date().toISOString().split('T')[0];

  let alvo;
  if (tipo === 'a-fazer') {
    alvo = document.getElementById('tarefas-a-fazer');
    alvo.innerHTML = '';
    tarefas.filter(t => t.data >= hoje).forEach(t => {
      const item = document.createElement('li');
      item.textContent = `${t.nome} - ${t.data}`;
      alvo.appendChild(item);
    });
  }
  if (tipo === 'cumpridas') {
    alvo = document.getElementById('tarefas-cumpridas');
    alvo.innerHTML = '';
    tarefas.filter(t => t.data === hoje).forEach(t => {
      const item = document.createElement('li');
      item.textContent = `${t.nome} - ${t.data}`;
      alvo.appendChild(item);
    });
  }
  if (tipo === 'descumpridas') {
    alvo = document.getElementById('tarefas-descumpridas');
    alvo.innerHTML = '';
    tarefas.filter(t => t.data < hoje).forEach(t => {
      const item = document.createElement('li');
      item.textContent = `${t.nome} - ${t.data}`;
      alvo.appendChild(item);
    });
  }
}

// Inicializa o carregamento das tarefas
carregarTarefas();
