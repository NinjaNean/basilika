import Joi from 'joi'


const validationSchema = Joi.object({
  storeName: Joi.string()
  .min(2)
  .max(100)
  .required(),

  storeDescription: Joi.string()
  .min(5)
  .max(300)
  .required(),

  storePrice: Joi.number()
  .positive()
  .precision(2)
  .required(),

  storeImg: Joi.string()
  .uri().
  required(), 
});




export default validationSchema;
