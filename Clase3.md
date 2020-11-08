### Clase 3 - MongoDB
## Actividad 3
___________________________
1. Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.
`agrego mas pelis`

2. Listar todas las películas del año 2018.
`db.movies.find({year: 2018})`

3. Listar las 10 primeras películas de Hollywood.
 `db.movies.find({},{country:'Hollywood'}).limit(10)`

4. Listar las 5 películas más taquilleras.
`db.movies.find({}, {income: -1}).limit(5)`

5. Listar el 2do conjunto de 5 películas más taquilleras.
`db.movies.find({},{title:1,income: -1, _id:0}).skip(2).limit(5)`

6. Repetir query 3 y 4 pero retornando sólo el título y genre.

`db.find({},{title:1, genre:1, _id:0}).sort({income:-1}).limit(5)`

7. Mostrar los distintos países que existen en la base de datos.
 `db.find({},{country})`
