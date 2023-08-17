const express=require('express');
const BlogController=require('../controllers/BlogController');
const UserController=require('../controllers/UserController');
const AuthMiddleware=require('../middleware/AuthMiddleware');
const router=express.Router();

//API Router End Point 
router.post("/CreateBlog",AuthMiddleware,BlogController.CreateBlog);
router.get("/ReadBlog",BlogController.ReadBlog);
router.get("/SingleReadBlog/:id",BlogController.SingleReadBlog);
router.post("/UpdateBlog/:id",AuthMiddleware,BlogController.UpdateBlog); 
router.get("/DeleteBlog/:id",AuthMiddleware,BlogController.DeleteBlog); 

//API Router End Point
router.post("/CreateUser",UserController.CreateUser);
router.post("/UserLogin",UserController.UserLogin);
router.post("/UserLogout",UserController.UserLogout);


router.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})



module.exports=router;