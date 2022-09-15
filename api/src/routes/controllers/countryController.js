const { Country, Activity } = require("../../db.js");
const { countriesDbLoader } = require("./countriesDbLoader");
const { Op } = require("sequelize");

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

const getAllCountries = async (query) => {
  //hacemos destructuring a req.query

  //creamos una variable en la que guardamos el length de nuestra database y si esta vacia le inyectamos los datos de la api con la funcion countriesDbloader
  let counted = await Country.count();
  if (counted < 1) {
    await countriesDbLoader();
  }
  //despues aplicamos filtros de sequalize en caso de existir query como parametro sino devolvemos todo la database en un array
  if (!query) {
    const countriesDb = await Country.findAll({
      include: [
        {
          model: Activity,
          attributes: ["name"], // se relacionan las actividades de cada país
          through: {
            attributes: [],
          },
        },
      ],
    });
    return countriesDb;
  } else {
    const filterDB = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
      include: [
        {
          model: Activity,
          attributes: ["name"], // se relacionan las actividades de cada país
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (filterDB < 1) throw new Error(`Cant find a country named ${query}`);
    else return filterDB;
  }
};
const getByParam = async (par) => {
  let checker = par.toUpperCase();
  //creamos una variable en la que guardamos el length de nuestra database y si esta vacia le inyectamos los datos de la api con la funcion countriesDbloader
  let counted = await Country.count();
  if (counted < 1) {
    await countriesDbLoader();
  }
  //despues buscamos por ide y lanzamos error si returna null
  if (!par) throw new Error(`${par} is not a valid CCA3 code`);
  else {
    const filterDB = await Country.findByPk(checker, {
      include: [
        {
          model: Activity,
          attributes: ["name"], // se relacionan las actividades de cada país
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!filterDB)
      throw new Error(`Cant find a country with the CCA3 code ${checker}`);
    else return filterDB;
  }
};

module.exports = {
  getAllCountries,
  getByParam,
};
