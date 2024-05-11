# Gerenciador de Podcast

### Descrição

App onde possa centralizar diferentes episódios podcasts separados por categoria

### Features

1. Listar os podcasts em sessões de categorias
2. Categorias: [saúde, bodybuilder, mentalidade, humor, esporte, corrida]
3. Filtrar episódios pelo nome do podcast owner

## Algoritmos

### Listar os podcasts em sessões de categorias

Retornar uma api rest (JSON): Nome do podcast, nome do episódio, imagem de capa, link, categoria

```
[{
  podcastName: "flow",
  episode: "CBUM - Flow #319",
  cover: "",
  videoId: "pQSuQmUfS30",
  link: "www.youtube.com/watch?v=pQSuQmUfS30",
  category: ["saúde", "bodybuilder", "esporte"]
},
{
  podcastName: "flow",
  episode: "RUBENS BARRICHELLO - Flow #339",
  cover: "",
  link: "www.youtube.com/watch?v=pQSuQmUfS30",
  category: ["esporte", "corrida"]
},
]
```
