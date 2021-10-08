##  Sobre o projeto

Api para Cadastro de Projetos

---

##  Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instaladas em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)


###  Rodando a aplicação

```bash

# Instale as dependências
$ npm i

# Acesse a pasta do projeto no terminal/cmd

# Crie um arquivo .env com as seguintes variáveis
-KEY (Chave do banco de dados)
# Execute a aplicação
$ npm start
```

As requisições seguem o modelo sugerido na descrição do teste pelo projeto.
 - Listagem de todos os projetos GET: **/projects**
 - Criação de projeto POST:  **/projects**
 - Atualizar projeto PUT: **/projects**, parâmetros: id
 - Deletar projeto DELETE: **/projects**, parâmetros: id
 - Salvar tarefa na lista tarefas POST:  **/projects/tasks**, parâmetros: id
---
