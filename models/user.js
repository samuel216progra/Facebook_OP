const {Schema, model} = require ('mongoose');

const UserSchema = Schema({

     name:{
        type: String,
        required : [true, 'The username is mandatory']
     },

     email:{
        type: String,
        required : [true, 'The email is mandatory'],
        unique: true
     },

     password:{
        type: String,
        required : [true, 'The password is mandatory']
     },

     status:{
        type: Boolean,
        default : true
     },

     publication:{
        type: [Schema.Types.ObjectId],
        required : 'Publication'
     },

});

UserSchema.methods.toJSON = function(){
    const{ __v, password, _id, ...usr} = this.toObject
    UserSchema.uid = _id;
    return user;
}

module.exports = model ('User', UserSchema);