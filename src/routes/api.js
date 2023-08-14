const express=require('express');
const BlogController=require('../controllers/BlogController');
const router=express.Router();

//API Router End Point
router.post("/CreateBlog",BlogController.CreateBlog);
router.get("/ReadBlog",BlogController.ReadBlog);
router.get("/SingleReadBlog/:id",BlogController.SingleReadBlog);
router.post("/UpdateBlog/:id",BlogController.UpdateBlog); 
router.get("/DeleteBlog/:id",BlogController.DeleteBlog); 



module.exports=router;