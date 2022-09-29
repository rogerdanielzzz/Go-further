const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getAllCountries,
  getByParam,
} = require("./controllers/countryController");
const {
  createActivity,
  getAllActivities,
  deleteActivityById,
} = require("./controllers/activityController");

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// Se crean las rutas y se importan los controladores

//router.get('/countries', getAllCountries);

router.get("/", async (req, res) => {
  
  
    res.send("Backend Go Further");

});

router.get("/countries", async (req, res) => {
  

  const { name } = req.query;
  try {
    res.status(200).json(await getAllCountries(name));
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
});
router.get("/countries/:idpais", async (req, res) => {
  

  const { idpais } = req.params;

  try {
    res.status(200).json(await getByParam(idpais));
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
});

router.get("/activities", async (req, res) => {
  

  try {
    res.status(200).json(await getAllActivities());
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

router.post("/activities", async (req, res) => {
  

  try {
    res.status(201).json({
      mesagge: await createActivity(req.body),
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

router.delete("/activities/:id", async (req, res) => {
  

  let id = req.params.id
  try {
    res.status(200).json(await deleteActivityById(id));
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
