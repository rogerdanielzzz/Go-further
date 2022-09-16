const { Country, Activity, activities_countries } = require("../../db.js");

const createActivity = async (obj) => {
  const { name, dificulty, duration, season, countries } = obj;
let nameCheck= name.toLowerCase();

  if (name && dificulty && duration && season && countries) {
    const [activity, created] = await Activity.findOrCreate({
      where: {
        name: nameCheck,
      },
      defaults: {
        dificulty,
        duration,
        season,
      },
    });

    countries.forEach(async (el) => {
      const country = await Country.findOne({
        where: {
          id: el,
        },
      });

      await country?.addActivity(activity);
    });

    return activity;
  } else {
    throw new Error("You must complete all fields");
  }
};

const getAllActivities = async () => {
const data= await Activity.findAll({
  include: {
    model:Country,
    
  
  }
  
})
  if (!data) throw new Error("Sin actividades");
  else return data
};







module.exports = {
  createActivity,
  getAllActivities
};
