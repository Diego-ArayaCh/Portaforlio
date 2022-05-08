const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');


//nuevo
const UserSchema = new Schema({
  username: {
    type: String,
  },
  email:{
      type: String,
  },
  pwd: {
    type: String,
  },
  backupKey: {
    type: String,
  },
  theme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theme'
},
});

UserSchema.pre('save', function (next) {
    var user = this;
  
   
    if (this.isModified('pwd') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.pwd, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
              
                user.pwd = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = async (passw, userPassw, cb) => {
    bcrypt.compare(passw, userPassw, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


const UserModel = model("User", UserSchema);

module.exports = UserModel;