const mongoose=require('mongoose')
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({    
        password: {
          type: String,
          required: [true, 'Password is required'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: {
          type: String,
          default: null,
        },
        owner: {
            type: SchemaTypes.ObjectId,
            ref: 'user',
          }
      
})

UserSchema.methods.setPassword = function(password){
this.password=bcrypt.hashSync(password,bcrypt,bcrypt.genSaltSync(6))
}
UserSchema.methods.validPassvord = function(password){
   
    return bcrypt.compareSync(password, this.password)
}

const User= mongoose.model('User',UserSchema)
module.exports=User;