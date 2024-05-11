# Gerenciador de Podcast

Este é um aplicativo projetado para centralizar diferentes episódios de podcasts, organizados por categorias
específicas.

## Descrição

O Gerenciador de Podcast é uma aplicação que permite aos usuários acessar uma variedade de podcasts e seus respectivos
episódios, agrupados por categorias. Com isso, os ouvintes podem facilmente encontrar e explorar conteúdo relacionado
aos seus interesses.

## Funcionalidades

1. **Listagem de Podcasts por Categoria**: Os podcasts são organizados em sessões de categorias, permitindo aos usuários
   explorar diferentes temas.
2. **Categorias Padrão**: O aplicativo inclui as seguintes categorias predefinidas: saúde, bodybuilder, mentalidade,
   humor, esporte e corrida.
3. **Filtro por Nome do Proprietário do Podcast**: Os usuários podem filtrar os episódios com base no nome do
   proprietário do podcast.

## Algoritmos

### Como aplicar o filtro por nome do podcast

**Endpoint:** `GET /api/episode?p=techGeeks` **Descrição:** Retorna uma lista de episódios do podcast techGeeks.
**Endpoint** `GET /api/list`. **Descrição:** Retorna todos os podcasts disponíveis.

### Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Um ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Ele
  permite que você execute JavaScript do lado do servidor, o que é ideal para construir aplicações web escaláveis.

- **[TypeScript](https://www.typescriptlang.org/)**: Um superconjunto de JavaScript que adiciona tipagem estática
  opcional ao idioma. Isso ajuda a capturar mais erros em tempo de compilação e torna o código mais legível e
  manutenível.

- **[@types/node](https://www.npmjs.com/package/@types/node)**: Um pacote que fornece definições de tipos para o
  Node.js. Isso permite que o TypeScript tenha informações de tipo adequadas para todas as APIs e módulos do Node.js.

- **[tsup](https://github.com/tsupjs/tsup)**: Um pacote de bundling rápido para projetos TypeScript. Ele ajuda a
  empacotar o código TypeScript em um único arquivo JavaScript para uso em produção.

- **[tsx](https://www.npmjs.com/package/tsx)**: Uma ferramenta que facilita o desenvolvimento e a compilação de projetos
  TypeScript. Ele fornece comandos para compilar, assistir e construir projetos TypeScript de forma eficiente.

## Como utilizar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor usando `npm start:watch` ou, `npm start:dev`
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome do podcast.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar sugestões, reportar problemas ou enviar pull requests para
este projeto.

---

Este README fornece uma visão geral do Gerenciador de Podcast e como ele funciona. Para mais detalhes sobre como
instalar, configurar e utilizar este aplicativo, consulte a documentação completa ou o código-fonte disponível no
repositório do projeto.
