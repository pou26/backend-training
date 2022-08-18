const express = require('express');
const router = express.Router();

const bookController= require("../controllers/bookController")

const authorController= require("../controllers/authorController")

router.post("/createAuthor",authorController.createAuthor)
router.post("/createBook",bookController.createBook)
router.get("/listBooks",bookController.listBooks)
router.get("/updatebook", bookController.updatebook)
router.get("/bookprice", bookController.bookprice)




module.exports = router;