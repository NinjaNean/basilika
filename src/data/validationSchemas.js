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

function validateInput(Form, touchedInput) {
    let css = {
		name: '',
		description: '',
        price: '',
        img: ''
	}
	if( touchedInput.name ) css.name = 'valid'
	if( touchedInput.description ) css.description = 'valid'
    if( touchedInput.price ) css.price = 'valid'
    if( touchedInput.img ) css.img = 'valid'
	

	let message = {
		name: '',
		description: '',
        price: '',
        img: ''
	}
	const results = validationSchema.validate(Form)
    console.log( results)

if( results.error ) {
    results.error.details.forEach(e => {

        const key = e.context.key
        if( !touchedInput[key] ) {

           
        css[key] = 'invalid'
        }

			if( key === 'name' ) {
				message.name = 'Skriv in namn på maträtt.'
			}
			else if( key === 'description' ) {
					message.description = 'Ge en beskrivning av maträtten.'
			}
            else if( key === 'price' ) {
                    message.price = 'Skriv in det nya priset.'
            }
            else if( key === 'img' ) {
                    message.img = 'Skriv in en giltig URL.'
            }
			
		})
	}
	const isFormValid = !results.error
        return { css, message, isFormValid }
}


export {validateInput};
