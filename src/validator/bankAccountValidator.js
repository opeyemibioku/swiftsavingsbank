import Joi from "joi";

const bankAccountValidator = Joi.object({
  accountHolderName: Joi.string(),
  accountHolderDOB: Joi.string(),
  accountType: Joi.string(),
  initialBalance: Joi.string(),
  accountNumber: Joi.number(),
});

export { bankAccountValidator };
