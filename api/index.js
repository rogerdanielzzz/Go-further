const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  PORT
} = process.env;
// al correr nodemon se carga la base de dato con la info de la api
// Syncing all the models at once.
const PUERTO= PORT || 3001;
conn.sync({alert: true}).then(async() => {
  server.listen(PUERTO, () => {
    console.log(`listening at ${PUERTO}`); // eslint-disable-line no-console
  });
 
  //Funcion que crea la db de la api
 
});
