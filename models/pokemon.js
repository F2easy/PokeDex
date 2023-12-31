//////////////////////////////////
// Our Schema and Dependencies ///
//////////////////////////////////
const mongoose = require('../utils/connection')

// destructuring the Schema dn model from mongoose
const {Schema, model} = mongoose

//////////////////////////////////
//  Schema Definition ////////////
//////////////////////////////////
const pokemonSchema = new Schema({
  name:{ type: String, required: true,},
  pokemonId:{ type: String, required: true,},
  height:{ type: Number, required: true,},
  weight:{ type: Number, required: true,},
  type:{ type: String, required: true,},
  onTeam:{ type: Boolean, required: true,},
  favorite:{ type: Boolean, required: true,},
  // need to add more things description, maybe a map of encouters, maybe moves,abilities but also need to add that to show page
  trainer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})



//////////////////////////////////
//  create user model ////////////
//////////////////////////////////
const Pokemon = model('Pokemon', pokemonSchema)


//////////////////////////////////
//  export user model ////////////
//////////////////////////////////
module.exports = Pokemon