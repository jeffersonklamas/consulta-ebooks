### Projeto em JavaScript

Projeto desenvolvido durante o **Hiring-Coders** da **Gama-Academy**, o propósito é simular uma requisição de um usuário para consulta de livros disponíveis em um banco de dados.

#### Inicializando a pasta do projeto com:

`npm init -y`

Este comando cria um arquivo `package.json` com as informações do projeto, neste é importante lembrar de informar qual arquivo deverá ser rodado.

```
 "scripts": {
    // Excluir a linha abaixo.
    "test": "echo \"Error: no test specified\" && exit 1"

    // Incluir esta linha.
    "start": "node app.js"
  },
```

Ao rodar pela primeira vez o comando `npm start` o mesmo irá criar a estrutura do projeto, uma série de perguntas sobre o mesmo.

### Bibliotecas utilizadas

Esta simula a entrada e solicitação do usuário, cria uma pasta `node_modules` com seus recursos e dependências necessárias para rodar o projeto, e cria também um arquivo `package-lock.json`
```
npm i readline-sync
```
