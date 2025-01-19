const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

personSchema.pre("save", async function (next) {
  const person = this;

  if (!person.isModified("password")) {
    next();
  }

  try {
    const salt = await bcrypt.genSalt(10);

    const hashpassword = await bcrypt.hash(person.password, salt);
    person.password = hashpassword;
    next();
  } catch (err) {
    return next(err);
  }
});

personSchema.methods.comparePassword = async function (checkPass) {
  try {
    const isMatch = await bcrypt.compare(checkPass, this.password);
    return isMatch;
  } catch (err) {
    return err;
  }
};
// create person models

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
