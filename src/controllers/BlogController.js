const BlogModel=require('../models/BlogModel');


// C=Create
exports.CreateBlog=async(req, res)=> {
    let reqBody=req.body;
    //console.log(reqBody);
     try{
          let result=await BlogModel.create(reqBody);
          if(result){
            res.status(200).json({status:"success",data:result})
          }else{
            res.status(200).json({status:"fail",data:'Something Error'})
          }   
     }
     catch (e) {
          res.status(200).json({status:"fail",data:e})
     } 
  }


//R=Read
exports.ReadBlog=async(req, res)=> {
    let query={};
    let Projection="title content author createdAt"
    try{
        let result=await BlogModel.find(query,Projection);
          if(result){
              res.status(200).json({status:"success",data:result})
          }else{
              res.status(200).json({status:"success",data:'Something Error'})
          }   
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
 }


 //R=Read
exports.SingleReadBlog=async(req, res)=> {
  let id=req.params.id;
  try{
      let result=await BlogModel.findById(id);
        if(result){
            res.status(200).json({status:"success",data:result})
        }else{
            res.status(200).json({status:"success",data:'Something Error'})
        }   
  }
  catch (e) {
      res.status(200).json({status:"fail",data:e})
  }
}


//U=Update
exports.UpdateBlog=async(req, res)=>{
     let id=req.params.id;
     let ReqBody=req.body;
     let query={_id:id};
     try{
         let result=await BlogModel.updateOne(query,ReqBody);
         if(result){
            res.status(200).json({status:"success",data:result});
         }else{
            res.status(200).json({status:"success",data:'Something Error'});
          }   
       }
       catch (e) {
          res.status(200).json({status:"fail",data:e})
       }
  }

//D=Delete
exports.DeleteBlog=async(req, res)=> {
    let id=req.params.id;
    try{
        let result=await BlogModel.findByIdAndDelete(id);
        if(result){
           res.status(200).json({status:"success",data:result});
        }else{
           res.status(200).json({status:"success",data:'Something Error'});
         }   
      }
     catch (e) {
         res.status(200).json({status:"fail",data:e})
     }
   }
