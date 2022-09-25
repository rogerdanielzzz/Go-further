const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { countriesDbLoader } = require("./src/routes/controllers/countriesDbLoader");

// al correr nodemon se carga la base de dato con la info de la api
// Syncing all the models at once.

conn.sync().then(async() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
  await countriesDbLoader();
  //Funcion que crea la db de la api
 
});
