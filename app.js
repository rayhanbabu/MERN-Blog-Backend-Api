const express=require('express');
const router=require('./src/routes/api');
const app=new express();
const bodyParser=require('body-parser');

//Security Middleware
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');
const mongoose=require('mongoose');


  //Security Middleware Impliment
  app.use(cors());
  app.use(helmet());
  app.use(mongoSanitize());
  app.use(xss());
  app.use(hpp());

  //body perser
  app.use(bodyParser.json())


    //Rate Limite
    const Limiter=rateLimit({windowMs:15*60*100,max:3000});

    //Database
    mongoose.connect("mongodb+srv://rayhanbabu458:rayhanbabu458@atlascluster.q16wgcx.mongodb.net/blogs")
       .then(()=>{
              //console.log("run");
         })
       .catch((err) => console.log(err));
             //Managing BackEnd API Routing  localhost:6000/api/v1
   app.use('/',router)

   module.exports=app;



