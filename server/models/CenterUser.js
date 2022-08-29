const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
JWTPRIVATEKEY = 'secret';

const CenterUserSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
    regid : { type: String, required: true, unique: true },
    center: {type: String, required: true},
    city : {type: String, required: true}, 
});

CenterUserSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const CenterUser = mongoose.model("CenterUser", CenterUserSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
        regid : Joi.string().required().label("Regid"),
        center: Joi.string().required().label("Center"),
        city : Joi.string().required().label("City"),

	});
	return schema.validate(data);
};

module.exports = { CenterUser, validate };