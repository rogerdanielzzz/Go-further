const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllCountries}= require("./controllers/countryController")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// Se crean las rutas y se importan los controladores

router.get('/countries', getAllCountries);


module.exports = router;
