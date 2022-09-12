const { Schema, Types, model } = require("mongoose");
const Joi = require("joi");

const User = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
}

module.exports.validateUser = validateUser;
module.exports.User = model("User", User);
