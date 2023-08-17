const mongoose=require('mongoose');

const DataSchema=mongoose.Schema(
      {
        title:{type:String},
        content:{type:String},
        author:{type:String},
        email:{type:String},
      },
     {timestamps:true,versionKey:false}
 );

 const BlogModel=mongoose.model('blogs',DataSchema);
 module.exports=BlogModel;