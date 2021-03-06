const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Film = new mongoose.Schema({
  created: {        
    type: Date,
    default: Date.now
  },
  episode: {
    type:Number,
  },
  edited: { 
    type: Date, 
    default: Date.now 
  },
  planet_ids: {
      type:[Number],
  },
  producer: {
    type: String,
  },
  title: { 
    type: String,
    required: true
  },
  director: {
    type:String,
  },
  release_date: {
    type:String,
  },
  opening_crawl: {
    type:String,
  },
  character_ids: {
    type:[Number]
  },
  specie_ids: {
    type: [Number]
  },
  key: { 
    type: Number, 
    unique: true 
  },
  starship_ids: {
    type:[Number]
  },
  vehicle_ids: {
    type:[Number]
  },
  starships: [{ //each film has a list of starships
    type: ObjectId,
    ref: "Starship"
  }],
  vehicles: [{ //each film has a list of vehicles
    type: ObjectId,
    ref: "Vehicle"
  }],
  planets: [{ //each film has a list of planets
    type: ObjectId,
    ref: "Planet"
  }],
  characters: [{ //each film has a list of chars
    type: ObjectId,
    ref: "Character"
  }],
  species: [{ //each film has a list of species
    type: ObjectId,
    ref: "Species"
  }]
  // add fields for starships, vehicles, planets, characters and species
  // to link them to the corresponding model
});

module.exports = mongoose.model('Film', Film);
