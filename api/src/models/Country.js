const { DataTypes } = require('sequelize');
const { serialize } = require('superagent');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    // Deberia valdiar que sea exactamente 3
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      validate:{
        len: [3]
      }

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Without capital",
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
  
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true,
      }
    },
    
    
  },
  {timestamps:false ,}
  );
};


/**[ ] País con las siguientes propiedades:
ID (Código de 3 letras) CCA3 *  "cca3": "VEN",
Nombre * NAME  "common": "Venezuela",
 Imagen de la bandera * FLAGS: [
"https://flagcdn.com/ve.svg",
"https://flagcdn.com/w320/ve.png"
]
Continente * CONTINENTS  O "region": "Americas",
Capital *  capital: "caracas"
Subregión "subregion": "South America"
Área  en km2 "area": 916445,
Población  "population": 28435943, 

*/ 