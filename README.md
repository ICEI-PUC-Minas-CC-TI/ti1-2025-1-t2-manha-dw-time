[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19597037&assignment_repo_type=AssignmentRepo)
# Nome do projeto

O principal objetivo do projeto é criar uma plataforma web intuitiva para o gerenciamento de rotinas e
tarefas. A plataforma visa melhorar a produtividade e proporcionar uma experiência positiva ao usuário.

Objetivos específicos:
• Simplificar a criação e o acompanhamento de rotinas e hábitos;
• Oferecer tarefas recorrentes e pontuais;
• Classificar e priorizar atividades;
• Garantir acessibilidade em diferentes dispositivos;
• Estimular a disciplina com visualização de progresso

## Alunos integrantes da equipe

* Gustavo Henrique de Oliveira Chaves
* Fernando Chaves Ribeiro
* Matheus Assis Figueiredo

## Professores responsáveis

* Hayala Nepomuceno Curto
* Luciana Mara Freitas Diniz
* Wesley Dias Maciel



# 📝 Sistema de Tarefas Inteligente

Este projeto é um organizador de tarefas completo com login, dashboard, calendário, filtros, tarefas favoritas e envio de e-mails via EmailJS.

## ✅ Requisitos

- [Node.js](https://nodejs.org)
- [VS Code](https://code.visualstudio.com/)
- [json-server](https://www.npmjs.com/package/json-server)
- Navegador (Chrome, Firefox etc.)

## 📦 Instalação

1. Extraia o conteúdo do ZIP em uma pasta local
2. Abra a pasta no VS Code
3. Execute no terminal:

```bash
npm install -g json-server
json-server --watch db.json
```

4. Clique com o botão direito em `login.html` > **"Open with Live Server"**
   - ou abra `login.html` no navegador

## 🔐 Login e Cadastro

- Página de **Login** com:
  - Login por **e-mail + senha**
  - Login por **celular + senha**
- Página de **Cadastro** com:
  - Nome, celular, e-mail e senha
- Após login, o usuário será redirecionado para o painel principal

## ✨ Funcionalidades

- Criar, editar, concluir, excluir e favoritar tarefas
- Tarefas separadas por: Atrasadas, A Fazer, Concluídas, Filtrar
- Filtros por categoria, data, nome e importância
- Exportação de tarefas (PDF e Excel)
- Dashboard de estatísticas
- Calendário estilo Google Agenda
- Página de perfil do usuário
- Sistema de notificações visuais e por e-mail (via EmailJS)
- Animação de carregamento suave entre páginas

## 📧 Integração com EmailJS

As notificações por e-mail estão integradas para:
- Criação de tarefa
- Exclusão de tarefa
- Tarefa vencida

## 👤 Dados de Teste

Você pode cadastrar novos usuários pela tela de cadastro ou usar json-server diretamente.

## 📁 Estrutura de Pastas

- `login.html`: login
- `calendario.html`: painel principal
- `*.html`: cada aba funcional (afazer, concluidas, etc)
- `js/`: scripts do sistema (email, verificação, animações)
- `db.json`: banco de dados simulado com JSON Server

---

💡 Em caso de dúvidas, entre em contato com o desenvolvedor. Boa organização!
