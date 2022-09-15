const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// al correr nodemon se carga la base de dato con la info de la api
// Syncing all the models at once.
const {getFromApi}= require("./src/routes/countryRouter")

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
  //Funcion que crea la db de la api
  getFromApi();
});
