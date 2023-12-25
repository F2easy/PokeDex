//////////////////////////////////
// Our Schema and Dependencies ///
//////////////////////////////////
const mongoose = require('../utils/connection')

// destructuring the Schema dn model from mongoose
const {Schema, model} = mongoose

//////////////////////////////////
//  Schema Definition ////////////
//////////////////////////////////
const userSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})


//////////////////////////////////
//  create user model ////////////
//////////////////////////////////
const User = model('User', userSchema)


//////////////////////////////////
//  export user model ////////////
//////////////////////////////////
module.exports = User