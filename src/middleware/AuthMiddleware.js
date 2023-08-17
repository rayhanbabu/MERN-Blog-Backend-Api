const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
      let Token=req.headers['token'];
      jwt.verify(Token,'SecretLy3495456535454574gryrtyrty5512143@$%#%FRDREGFDF',function(err,decoded){
          if(err){
              res.status(401).json({status:"Unauthorized"})
          }else{
              req.headers.email=decoded['data'];
               next();
           }
      })
}