# seminario_mongoDB
comandos del seminario mongoDB - 2020
----CLASE 1 ----
mongod
mongo
show dbs
help
--
use futbolfifa

db.createCollection("players")
show collections
db.players.insert({name: "Matias", surname:"Suarez",position:"delantero", birth: 09/05/1988,number: 7})
db.players.find()
db.players.insert({name: "Rafael", surname:"Santos Borré",position:"delantero", birth: 15/09/1995,number: 19 })
db.players.insert({name: "Leonardo", surname:"Ponzio",position:"mediocampo", birth: 17/07/1982,number: 23 })
db.players.insert({name: "Enzo", surname:"Perez",position:"mediocampo", birth: 22/02/1986,number: 24 })
db.players.insert({name: "Robert", surname:"Rojas",position:"defenza", birth: 30/04/1996,number: 2 })

db.players.find()
//me equivoque y los cree en la misma coleccion que habia hecho antes asi que lo tuve que borrar
db.players.deleteOne({name: "uno"})
db.players.deleteOne({name: "truco"})
db.players.deleteOne({name: "canasta"})

db.createCollection("games")
db.games.insert({name: "uno", maxPlayers:8})
db.games.insert({name: "truco", maxPlayers:6})
db.games.insert({name: "canasta", maxPlayers:6})
db.games.find()
show collections
show dbs
db.createCollection("teams")
db.teams.insert({name:"river", color:"rojo y blanco"})
db.teams.insert({name:"boca", color:"amarillo y azul"})
db.teams.insert({name:"san lorenzo", color:"rojo y azul"})
db.teams.insert({name:"racing", color:"celeste y blanco"})
db.teams.find()
show collections // players,games,teams
[ ]
--CLASE 2--
//1-
use netflix
db.createCollection("movies")
//2 y 3 //no dejar espacios sino no lo toma
db.movies.insert({titulo: "Contratiempo",year:2016, rating:3.7 , genre:"suspenso", description:"Un joven empresario despierta en un hotel...", 
actors:[{name:"Mario",surname:"Casas"},{name:"Ana",surname:"Wagener"}],
country:"Estados Unidos",income:300000000, duration:104})

db.movies.insertOne({titulo: "Dioses de egipto",year:2016, rating:4.4 , genre:"accion", description:"Despues de que set,dios de la oscuridad toma el control..", 
actors:[
{name:"Nickolaj",surname:"Coster-Waldau"},
{name:"Brenton",surname:"Thwaites"},
{name:"Chadwick",surname:"Boseman"},
],
country:"España",income:150000000, duration:126})

db.movies.insertMany([ 
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

//4- highlighted=true  where rating > 4.5 ??

db.movies.updateMany(
{rating: {$gt:4.5}},
{$set:{highlighted:true}},
{upsert:true})

//5- actualizar peliculas genre"drama" por bored
db.movies.insertOne({titulo: "Bajo la misma estrella",year:2014, rating:4.0 , genre:"drama", description:"Dos adolescentes pacientes de cancer..", 
actors:[
{name:"Shailene",surname:"Woodley"},
{name:"Ansel",surname:"Elgort"}
],
country:"Estados Unidos",income:304186490, duration:126})

db.movies.updateMany(
{genre:"drama"},
{$set:{genre:"bored"}}
)

//6-borrar todas las peliculas que tengan mas de 30años---preguntar
db.movies.deleteMany(
{year:{$lt:1990}}
)

//7- buscar todas las peliculas argentinas
db.movies.find(
{country:"Argentina"}
)

//8-buscar todas las peliculas de accion con rating>4.0 en los ultimos dos años ---preguntar
db.movies.find(
{genre:"accion", rating:{$gt:4.0}, year:{$gt:2018}}
})
