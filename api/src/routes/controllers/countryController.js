const { Country, Activities } = require("../../db.js");
const { countriesDbLoader } = require("./countriesDbLoader");

/*[ ] GET /countries:
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
Obtener un listado de los paises.
[ ] GET /countries/{idPais}:
Obtener el detalle de un país en particular
Debe traer solo los datos pedidos en la ruta de detalle de país
Incluir los datos de las actividades turísticas correspondientes
[ ] GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado */

const getAllCountries = async (req, res) => {
    const { name } = req.query;
    console.log(name)

    let counted = await Country.count();
    console.log(counted)
  if (counted < 1){
    console.log("inyecto Db")
    countriesDbLoader().then(async()=>{
        try {
            if (!name) {
        
              const countriesDb = await Country.findAll();
              return res.json(countriesDb);
            } else {
              const filterDB = await Country.findAll({
                where: {
                  name: {
                    [Op.iLike]: `%${name}%`,
                  },
                },
              });
              if (filterDB < 1) throw new Error(`Cant find a country named ${name}`);
              else {
                return res.status(200).json(filterDB);
              }
            }
          } catch (e) {
            return res.status(400).json({
              message: e,
            });
          }





    });
  } 

  
 
};



module.exports = {
  getAllCountries,
};
