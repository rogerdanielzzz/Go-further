const { Country, Activity } = require("../../db.js");

const createActivity = async (obj) => {
  const { name, difficulty, duration, season, countries, image } = obj;
let nameCheck= name.charAt(0).toUpperCase() + name.slice(1);
console.log(nameCheck)
  if (name && difficulty && duration && season && countries) {
    const [activity, created] = await Activity.findOrCreate({
      where: {
        name: nameCheck,
      },
      defaults: {
        image,
        difficulty,
        duration,
        season,
      },
    });

    countries.forEach(async (el) => {
      const country = await Country.findOne({
        where: {
          name: el,
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
  if (data.length<1) throw new Error("No activities registered");
  else return data
};



const deleteActivityById= async(el)=>{
  const activityFinder = await Activity.findOne({
    where: {
      id: el,
    },
  });
  
  if(!activityFinder){
    throw new Error("cante find an activity to delete")
  }else{
    await activityFinder.destroy()
    return "Activity Deleted"
    
  }

}







module.exports = {
  createActivity,
  getAllActivities,
  deleteActivityById
};
