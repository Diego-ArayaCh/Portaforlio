const {Schema, model} = require('mongoose');




const ThemeShema = new Schema({
  fontContentColor: {
    type: String,
  },
  fontTitleColor: {
    type: String,
  },
  deepBackground: {
    type: String,
  },
  backgroundColor1: {
    type: String
  },
  backgroundColor2: {
    type: String,
  },
  accent: {
      type: String,
  },
  primary: {
      type: String
  },
  name:{
    type: String
  }

});





const ThemeModel = model("Theme", ThemeShema);

module.exports = ThemeModel;