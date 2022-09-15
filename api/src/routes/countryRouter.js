const axios = require('axios');
const { Country } = require('../db.js');


const getFromApi = async () => {
    
    axios.get("https://restcountries.com/v3/all").then((res)=>{
 
      res.data.map(async (el) => {
         await Country.create({
           id: el.cca3,
           name: el.name.common,
           continent: el.region,
           capital: el.capital && el.capital[0],
           subregion: el.subregion || el.region,
           area: el.area,
           population: el.population,
           flags: el.flags[0],
         });
       });
       console.log("Db Created");
     }).catch((err)=> console.log(err))
   
   };

   module.exports={
    getFromApi,
   }