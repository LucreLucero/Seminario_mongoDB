## CLASE 1 
_______________________
> mongod

> mongo

> show dbs

> help

- ACTIVIDAD #1

> use futbolfifa

> db.createCollection("players")
> show collections
> db.players.insert({name: "Matias", surname:"Suarez",position:"delantero", birth: 09/05/1988,number: 7})
> db.players.find()
> db.players.insert({name: "Rafael", surname:"Santos Borré",position:"delantero", birth: 15/09/1995,number: 19 })
> db.players.insert({name: "Leonardo", surname:"Ponzio",position:"mediocampo", birth: 17/07/1982,number: 23 })
> db.players.insert({name: "Enzo", surname:"Perez",position:"mediocampo", birth: 22/02/1986,number: 24 })
> db.players.insert({name: "Robert", surname:"Rojas",position:"defenza", birth: 30/04/1996,number: 2 })

> db.players.find()
//me equivoque y los cree en la misma coleccion que habia hecho antes asi que lo tuve que borrar
> db.players.deleteOne({name: "uno"})
> db.players.deleteOne({name: "truco"})
> db.players.deleteOne({name: "canasta"})

> db.createCollection("games")
> db.games.insert({name: "uno", maxPlayers:8})
> db.games.insert({name: "truco", maxPlayers:6})
> db.games.insert({name: "canasta", maxPlayers:6})
> db.games.find()
> show collections
> show dbs
> db.createCollection("teams")
> db.teams.insert({name:"river", color:"rojo y blanco"})
> db.teams.insert({name:"boca", color:"amarillo y azul"})
> db.teams.insert({name:"san lorenzo", color:"rojo y azul"})
> db.teams.insert({name:"racing", color:"celeste y blanco"})
> db.teams.find()
> show collections // players,games,teams
[ ]

## CLASE 2
___________________
- ACTIVIDAD #2

1.
> use netflix
> db.createCollection("movies")
2. y 3. //no dejar espacios sino no lo toma
> db.movies.insert({titulo: "Contratiempo",year:2016, rating:3.7 , genre:"suspenso", description:"Un joven empresario despierta en un hotel...", 
actors:[{name:"Mario",surname:"Casas"},{name:"Ana",surname:"Wagener"}],
country:"Estados Unidos",income:300000000, duration:104})

> db.movies.insertOne({titulo: "Dioses de egipto",year:2016, rating:4.4 , genre:"accion", description:"Despues de que set,dios de la oscuridad toma el control..", 
actors:[
{name:"Nickolaj",surname:"Coster-Waldau"},
{name:"Brenton",surname:"Thwaites"},
{name:"Chadwick",surname:"Boseman"},
],
country:"España",income:150000000, duration:126})

> db.movies.insertMany([ 
{titulo: "Seven:los siete pecados capitales",year:1995, rating:5.0 , genre:"crimen", description:"Un solitario detective veterano a punto de retirarse...",
 actors:[{name:"Morgan",surname:"Freeman"},{name:"Brad",surname:"Pitt"}],
country:"Estados Unidos",income:327000000, duration:127},
{titulo: "La odisea de los giles",year:2019, rating:5.0 , genre:"aventura", description:"Cuando un grupo de vecinos descubre que perdieron todos sus ahorros...", 
actors:[{name:"Luis",surname:"Brandoni"},{name:"Ricardo",surname:"Darin"},{name:"Andres",surname:"Parra"},{name:"Chino",surname:"Darin"}],
country:"Argentina",income:7200000, duration:120},
{titulo: "Rocky",year:1976, rating: 3.1, genre:"deportes", description:"Saga de populares peliculas de boxeo", 
actors:[{name:"Sylvester",surname:"Stallone"},{name:"Talia",surname:"Shire"},{name:"Carls",surname:"Weathers"}],
country:"Estados Unidos",income:1407000000, duration:126},
{titulo: "BlancaNieves",year:1937, rating:4.5 , genre:"fantasia", description:"Una mujer joven y hermosa, huye de la reina malvada...",
 actors:[{name:"Adriana",surname:"Caselotti"},{name:"Lucille",surname:"La Verne"},{name:"Harry",surname:"Stockwell"}],
country:"Reino Unido",income:418000000, duration:127},
])

> "publishDAte":ISODate("1937-05-05T00:00:002")

4. highlighted=true  where rating > 4.5 ??

> db.movies.updateMany(
{rating: {$gt:4.5}},
{$set:{highlighted:true}}
)

### Esta actualizacion me va a dar uno, mas de uno o ningun resultado

5. actualizar peliculas genre"drama" por bored

> db.movies.insertOne({titulo: "Bajo la misma estrella",year:2014, rating:4.0 , genre:"drama", description:"Dos adolescentes pacientes de cancer..", 
actors:[
{name:"Shailene",surname:"Woodley"},
{name:"Ansel",surname:"Elgort"}
],
country:"Estados Unidos",income:304186490, duration:126})

> db.movies.updateMany(
{genre:"drama"},
{$set:{genre:"bored"}}
)

6. borrar todas las peliculas que tengan mas de 30años---preguntar

> db.movies.deleteMany(
{year:{$lt:1990}} ---currentYear
)

7. buscar todas las peliculas argentinas
> db.movies.find(
{country:"Argentina"}
)

8. buscar todas las peliculas de accion con rating>4.0 en los ultimos dos años ---preguntar
> db.movies.find({genre:"accion", rating:{$gt:4.0}, year:{$gt:2018}})


-----------------------
### Por convencion la coleccion se crea con nombre todo minuscula en plural en actors se puede hacer un object_id
### createdAt:newDAte() --> para ponerle la fecha

## CLASE 3

### En mongoDB hay que prestar atencion como se escriben las cosas, no es lo mismo mayusculas que minusculas
### Insertar fechas:
> db.logs.insert({ createdAt:new DAte() })
> db.logs.insert({ createdAt:new ISODAte() })

### se pone con 3hs mas en la que estoy porque la tengo q poner en utc y el sistema la convierte a la hora local:
> db.logs.insert({ createdAt:new ISODAte("2020-10-21T21:00:00Z") })
### o alternativa:
> db.logs.insert({ createdAt:new ISODAte("2020-10-21T23:00:00-3:00") })

> db.movies.find({"title"}) // proyecciones

> db.movies.find({}).limit(3) //limite de busqueda

### ordenado por
> db.movies.find().sort({ title: -1 })
> db.movies.find().sort({ genre:1, title:1 })
> db.movies.find({},title:1, genre:1, _id:0).sort({ genre:1, title:1 }) 

### skip
> db.movies.find({},{title:1 , genre:1, _id:0}).skip(3).limit(3) // para paginacion

### count
> db.movies.find({},{title:1 , genre:1, _id:0}).count

### distinct-- busca valores diferentes 
> db.movies.distinct("year")
> db.movies.distinct("genre")

## ACTIVIDAD #3
> db.movies


> db.movies.find().{{income:-1}}.limit(10)

6.
 > db.find({},{title:'Hollywood'}).limit(5)

> db.find({},{title:1, genre:1, _id:0}).sort({income:-1}).limit(5)




### Para hacer links a otro archivo -> [Otro archivo](archivo2.md)

----------------------------------
## CLASE 4

### Backup en mongoDB--(mongodump y mongorestore)

> mongodump--db netflix(nombre de la db)

> ls
> cd netflix/
> ls
> cat movies.bson

> cat movies.metadata.json

> mongorestore --db <path>
> mongorestore --db netflix_gise (hago un clon--pero son dos bd distintas)

### como creo un indice??
> db.movies.createIndex({year:1}) // 1 seria igual a true

### creo el indice //creo indices de tipo texto
> db.movies.createIndex({
   title:"text", 
   desc:"text"
})

### busco por el indice
> db.movies.find(
   {$text:{$search:"terminator"}}
)

### TTL = para terminos que expiran en cierto tiempo 

> db.createCollection("sessions")

> db.sessions.insert([
  {userId: 1, expDate: new Date("2020-12-12")},
  {userId: 2, expDate: new Date("2020-12-13")},
  {userId: 3, expDate: new Date("2020-12-14")}, 
  {userId: 4, expDate: new Date("2020-12-15")}

])

> db.sessions.createIndex(
   {expDate: 1},
   {expireAfterSeconds: 15}
)

## ACTIVIDAD #4

1. Utilizar la misma base de datos de películas e insertar varias películas (al menos 30) con distinto contenido.

2. Crear índice en field rating y luego hacer búsquedas usando este campo.
> db.movies.createIndex({rating: 1})

3. Crear índice en title y description, y después hacer búsquedas de texto en estos campos.
