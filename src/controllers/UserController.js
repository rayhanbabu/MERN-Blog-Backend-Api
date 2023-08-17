const UserModel=require('../models/UserModel');
const jwt=require("jsonwebtoken");


// C=Create
exports.CreateUser=async(req, res)=> {
    let reqBody=req.body;
    //console.log(reqBody);
     try{
          let result=await UserModel.create(reqBody);
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


  exports.UserLogin=async (req,res)=>{
    try{
        let email=req.body['email'];
        let password=req.body['password'];
        let query={email:email,password:password};

        let result= await  UserModel.find(query).count('total');
        if(result===1){
              //Token Issue
             let PayLoad={
                 exp:Math.floor(Date.now()/1000)+(24*60*60),
                 data:email
             }

             let token=jwt.sign(PayLoad, 'SecretLy3495456535454574gryrtyrty5512143@$%#%FRDREGFDF');
             res.status(200).json({status:"success", data:token})
        }else{
             res.status(200).json({status:"fail", data:result})
        }
    }catch(e){
        res.status(200).json({status:"Fail", data:e})
    }
}

exports.UserLogout=async (req,res)=>{
  try{
    let token= req.headers['token'];
    jwt.destroy(token);
    res.status(200).json({status:"success", data:'Token destroy'})
   }catch(e){
      res.status(200).json({status:"Fail", data:e})
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
