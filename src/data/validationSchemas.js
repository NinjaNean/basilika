import Joi from 'joi'


const validationSchema = Joi.object({
  storeName: Joi.string()
  .min(4)
  .max(30)
  .required(),

  storeDescription: Joi.string()
  .min(5)
  .max(100)
  .required(),

  storePrice: Joi.number()
  .positive()
  .precision(2)
  .required(),

  storeImg: Joi.string()
  .uri().
  required(), 
});


export {validationSchema};
