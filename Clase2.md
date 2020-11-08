### Clase 2 - MongoDB
___________________________________
##  Actividad

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.
´use netflix´
´db.createCollection("movies")´

2. Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).
3. Agregar películas usando insert(), insertOne() & insertMany().
´db.movies.insert({titulo: "Contratiempo",year:2016, rating:3.7 , genre:"suspenso", description:"Un joven empresario despierta en un hotel...", 
actors:[{name:"Mario",surname:"Casas"},{name:"Ana",surname:"Wagener"}],
country:"Estados Unidos",income:300000000, duration:104})´

´db.movies.insertOne({titulo: "Dioses de egipto",year:2016, rating:4.4 , genre:"accion", description:"Despues de que set,dios de la oscuridad toma el control..", 
actors:[
{name:"Nickolaj",surname:"Coster-Waldau"},
{name:"Brenton",surname:"Thwaites"},
{name:"Chadwick",surname:"Boseman"},
],
country:"España",income:150000000, duration:126})´

´db.movies.insertMany([ 
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
])´

4. Actualizar películas agregando el field highlighted=true a aquellas con rating > 4.5.

'db.movies.updateMany(
{rating: {$gt:4.5}},
{$set:{highlighted:true}}
)'

5. Actualizar películas cambiando el genre “drama” por “bored”.

'db.movies.insertOne({titulo: "Bajo la misma estrella",year:2014, rating:4.0 , genre:"drama", description:"Dos adolescentes pacientes de cancer..", 
actors:[
{name:"Shailene",surname:"Woodley"},
{name:"Ansel",surname:"Elgort"}
],
country:"Estados Unidos",income:304186490, duration:126})'

'db.movies.updateMany(
{genre:"drama"},
{$set:{genre:"bored"}}
)'

6. 	Borrar todas las películas que tengan más de 30 años.

'db.movies.deleteMany({year:{$lt:1990}})'

7. 	Buscar todas las películas argentinas.

'db.movies.find(
{country:"Argentina"}
)'

8.	Buscar todas las películas de acción con un buen rating (ej. > 4.0)
	que hayan salido los últimos 2 años.
  
'db.movies.find({genre:"accion", rating:{$gt:4.0}, year:{$gt:2018}})'

