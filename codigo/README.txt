
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

4. Clique com o botão direito em `inicio.html` > **"Open with Live Server"**
   - ou abra `inicio.html` no navegador

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

- `index.html`: login
- `cadastro.html`: criar conta
- `dashboard.html`: painel principal
- `*.html`: cada aba funcional (afazer, concluidas, etc)
- `js/`: scripts do sistema (email, verificação, animações)
- `db.json`: banco de dados simulado com JSON Server

---

💡 Em caso de dúvidas, entre em contato com o desenvolvedor. Boa organização!
