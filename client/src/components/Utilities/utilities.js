export const errorsChecker = (values) => {
    const errors = {};
    const urlValidator = /^$|((http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png))/g
    const numberValidator =   /^[1-9][0-9]*$/
    if  (!values.name) {
        errors.name = "An Activity name is required";
       }
    if  (!values.difficulty){
        errors.difficulty = "Difficulty is required"
        } 
    if  (!values.duration){
        errors.duration = "Duration is required"
        }
    
      if (!numberValidator.test(values.duration)){
          errors.duration = " Enter a valid Duration"
        }
    if (!urlValidator.test(values.image) ){
        errors.image = " Must be in url format jpg or png"
        }
    if  (!values.season){
        errors.season = "The season is required"
        }
    if  (!values.countries || values.countries.length === 0){
        errors.countries = "At least one country must be selected"
        }
    return errors 
      }