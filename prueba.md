# Seminario MongoDB 2020
 Lucero Lucrecia 
### Clase 1
______________________
1.  Instalar MongoDB en ambiente local.
2. Conectarse a MongoDB vía CLI.

3.  Crear una nueva base de datos llamada futbolfifa.

  `use futbolfifa`

4. Crear una nueva collection llamada players.
 
 `db.createCollection("players")`
 `show collections`

5. Insertar 5 documentos en la collection players con datos básicos (nombre, apellido, posición, fecha de nacimiento, etc).
`db.players.insert({name: "Matias", surname:"Suarez",position:"delantero", birth: 09/05/1988,number: 7})`

`db.players.find()`

`db.players.insert({name: "Rafael", surname:"Santos Borré",position:"delantero", birth: 15/09/1995,number: 19 })`

`db.players.insert({name: "Leonardo", surname:"Ponzio",position:"mediocampo", birth: 17/07/1982,number: 23 })`

`db.players.insert({name: "Enzo", surname:"Perez",position:"mediocampo", birth: 22/02/1986,number: 24 })`

`db.players.insert({name: "Robert", surname:"Rojas",position:"defenza", birth: 30/04/1996,number: 2 })`

6.  Listar todos los documentos de la collection players.
 `db.players.find()`

7.  Crear otras collections con documentos (ej. teams, games, etc).
`db.createCollection("games")`

`db.games.insert({name: "uno", maxPlayers:8})`

`db.games.insert({name: "truco", maxPlayers:6})`

`db.games.insert({name: "canasta", maxPlayers:6})`

`db.games.find()`

`show collections`

`show dbs`

`db.createCollection("teams")`

`db.teams.insert({name:"river", color:"rojo y blanco"})`

`db.teams.insert({name:"boca", color:"amarillo y azul"})`

`db.teams.insert({name:"san lorenzo", color:"rojo y azul"})`

`db.teams.insert({name:"racing", color:"celeste y blanco"})`

`db.teams.find()`

`show collections` // players,games,teams
