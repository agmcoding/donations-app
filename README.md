# Aplicativo de Doações

O aplicativo foi criado utilizando React Native e a biblioteca auxiliar Expo. O app foi planejado para ser intuitivo e fácil de usar.

## Rotas e estrutura do app

### Estrutura do projeto

Este `README.md` deste repositório (código do FrontEnd do app) está localizado na pasta mais superior da estrutura (com `.idea` e a pasta principal `donations-app`).
Acessando a pasta principal, podemos visualizar que a maior parte dos arquivos (como `package.json`, `app.json`, etc) foi criada a partir da construção do app pela biblioteca Expo.
A documentação oficial do Expo explica muito bem a estrutura de arquivos de um aplicativo Expo (como este). Também apresenta informações relevantes sobre os arquivos e suas funcionalidades.
Link: https://docs.expo.dev/get-started/start-developing/#file-structure 

### Rotas do app

Como apresentada na documentação do Expo, este utiliza sua própria funcionalidade de rotas do app (facilitando muita coisa para criar a navegação do aplicativo em React Native).
A partir do diretório `app`:

> Quaisquer arquivos adicionados a este diretório se tornam uma tela dentro do nosso aplicativo nativo e uma página na web.
Link: https://docs.expo.dev/tutorial/add-navigation/#expo-router-basics

Para este aplicativo, foram criados os arquivos `index.tsx`, `signup.tsx` (ambos são as páginas iniciais do app, uma para login e a outra para cadastro), `_layout.tsx` (para criação de abas do app) e o diretórito `doador/[id]`.
Quando o usuario faz o login (se cadastrado) do app, algumas requisições de API são feitas (para este projeto foram usados um servido Node.js para receber e enviar requisições e o banco de dados MySQL).
Depois, o app direciona o usuário para a rota corresponde de seu ID, isso é uma rota dinâmica (por isso o diretório com o nome `doador[id]`, como apresentado aqui: https://docs.expo.dev/develop/dynamic-routes/).
Este é o perfil do usuário, onde ele pode fazer uma doação.

## Como executar o app

Quando utilizamos a biblioteca Expo, ele gera automaticamente uma documentação `README.md` (em Inglês, nesse caso) explicando como a estrutura padrão do app foi construída.
Também apresenta o comando para executar o aplicativo (`npx expo start`) e outros comandos relevantes, assim como links para sua documentação oficial (https://docs.expo.dev/).

## Tecnologias utilizadas

1. Do aplicativo:
  * JavaScript & TypeScript
  * React Native
  * Expo
  * Android Studio
  * Emulador do Android Studio
  * NPM
2. Do servido BackEnd para requisições API (link: https://github.com/agmcoding/node-backend-server-donations-app):
  * Node.js
  * Express
  * VSCode
  * NPM
3. Banco de Dados MySQL
4. Terminal
5. Git
