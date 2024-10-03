const express = require("express");
//router objects
const router = express.Router();

//routers
//GET || all blogs
router.get("/all-blog", getAllBlogsController);

//post || Create blogs
router.post("/create-blog", createBlogController);

//PUT || update blog
router.put("/update-blog/:id", updateBlogController);

//GET || Single Blog Details

router.get("/get-blog/:id", getBlogByIdController);

//DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);
