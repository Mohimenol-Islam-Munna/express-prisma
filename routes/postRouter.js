const router = require("express").Router()
const postController = require("../controllers/postController")

// endpoints 
// GET: "/posts" 
router.get("/all", postController.getAllPost)

// POST: "/post"
router.post("/create", postController.createPost)

module.exports = router