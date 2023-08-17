const mongoose=require('mongoose');

const DataSchema=mongoose.Schema(
      {
        email:{type:String,unique:true,required: true, match: /.+\@.+\..+/,},
        name:{type:String},
        phone:{type:String},
        password:{type:String}
      },
     {timestamps:true,versionKey:false}
 );

 const UserModel=mongoose.model('users',DataSchema);
 module.exports=UserModel;