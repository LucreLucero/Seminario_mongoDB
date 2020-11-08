### Clase 4 - MongoDB
## Actividad 4
___________________________
1. Utilizar la misma base de datos de películas e insertar varias películas (al menos 30) con distinto contenido.
`db.movies.insertMany({})`

2. Crear índice en field rating y luego hacer búsquedas usando este campo.
 `db.movies.createIndex({rating: 1})`
 `db.movies.find({rating: 4.5})`

3. Crear índice en title y description, y después hacer búsquedas de texto en estos campos.
`db.movies.createIndex({title:"text", description:"text"})`
`db.movies.find({$text:{$search:"rocky", "boxeo"})`
