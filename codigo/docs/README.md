# DWTime - Sistema de Tarefas Inteligente

DWTime é uma aplicação web para gerenciamento de tarefas com foco em produtividade, acessibilidade e visual moderno.

## Funcionalidades Principais

- Login com nome do usuário
- Saudação personalizada
- Criação de tarefas com data, importância e observações
- Listagem por status: A Fazer, Atrasadas, Concluídas
- Filtros, dashboard e calendário
- Sidebar retrátil com ícones e animações
- Feedbacks visuais e sonoros para ações
- Responsividade para dispositivos móveis

## Tecnologias Utilizadas

- HTML5, CSS3 (customizado)
- JavaScript Vanilla
- JSON-Server (simulação de backend)
- Font Awesome (ícones)
- Google Fonts (Montserrat)

## Instruções para Rodar Localmente

1. Instale o [Node.js](https://nodejs.org/)
2. Instale JSON Server:
```bash
npm install -g json-server
```
3. Inicie o servidor:
```bash
json-server --watch codigo/db.json
```
4. Abra `codigo/index.html` no navegador.

## Estrutura de Pastas

- `docs/README.md` → esta documentação
- `CAPA_DO_PROJETO.md` → capa com informações do grupo
- `CITATION.cff` → arquivo de citação do projeto

## Licença

Este projeto está licenciado sob a Licença MIT.
