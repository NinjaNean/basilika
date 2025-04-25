import Joi from "joi";

const validationSchema = Joi.object({
  storeName: Joi.string()
    .min(4)
    .max(22)
    .required()
    .pattern(/^[a-zA-ZåäöÅÄÖ\s,.]*$/),

  storeDescription: Joi.string()
    .min(5)
    .max(110)
    .required()
    .pattern(/^[a-zA-ZåäöÅÄÖ\s,.]*$/),

  storePrice: Joi.number().positive().precision(2).required().min(0).precision(2),

  storeImg: Joi.string().uri().required(),
});

function validateInput(Form, touchedInput) {
  let css = {
    name: "",
    description: "",
    price: "",
    img: "",
  };
  if (touchedInput.name) css.name = "invalid";
  if (touchedInput.description) css.description = "invalid";
  if (touchedInput.price) css.price = "invalid";
  if (touchedInput.img) css.img = "invalid";

  let message = {
    name: "",
    description: "",
    price: "",
    img: "",
  };
  const results = validationSchema.validate(Form, { abortEarly: false });
  //   console.log(results);

  if (results.error) {
    results.error.details.forEach((e) => {
      const key = e.context.key;
      if (!touchedInput[key]) {
        css[key] = "invalid";
      }
      const regex = /^[a-zA-ZåäöÅÄÖ\s,.]*$/;

      if (key === "storeName") {
        message.name = "Skriv in namn på maträtt, minst 4 tecken.";
        if (Form.storeName.length > 22) {
          message.name = "Max 22 bokstäver.";
        }

        if (!regex.test(Form.storeName)) {
          message.name = "Endast (a-z, åäö,.) och mellanslag är tillåtna.";
        }
      } else if (key === "storeDescription") {
        message.description = "Ge en beskrivning av maträtten, minst 5 tecken.";
        if (Form.storeDescription.length > 110) {
          message.description = "Max 110 bokstäver.";
        }
        if (!regex.test(Form.storeDescription)) {
          message.description = "Endast (a-z, åäö,.) och mellanslag är tillåtna.";
        }
      } else if (key === "storePrice") {
        message.price = "Ange det nya priset.";
        if (Form.storePrice < 0) {
          message.price = "Priset kan inte vara under 0.";
        }
      } else if (key === "storeImg") {
        message.img = "Skriv in en giltig URL-adress.";
      }
    });
  }
  const isFormValid = !results.error;
  // console.log("isFormValid:", isFormValid);
  return { css, message, isFormValid };
}

export { validateInput };
