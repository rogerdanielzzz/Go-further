const axios = require("axios");
const { Country } = require("../../db.js");

const countriesDbLoader = async () => {
  let resApi = await axios.get("https://restcountries.com/v3/all");
  const arrData = await resApi.data.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,
      continent: el.region,
      capital: el.capital && el.capital[0],
      subregion: el.subregion || el.region,
      area: el.area,
      population: el.population,
      flags: el.flags[1] || el.flags[0],
    };
  });
  const saver = () => {
    arrData.map((el) => {
      Country.findOrCreate({
        where: {
          name: el.name,
          id: el.id,
        },
        defaults: {
          continent: el.continent,
          capital: el.capital,
          subregion: el.subregion,
          area: el.area,
          population: el.population,
          flags: el.flags,
        },
      }).catch((err) => {
        console.log(err);
      });
    });
  };

  console.log("Db Created");
  return saver();
};

module.exports = {
  countriesDbLoader,
};
