const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memeController= require('../controllers/memeController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/vaccinationByDistrict", cowinController.vaccinationByDistrict)
router.get('/temperature/temp', weatherController.londonWeather)
router.get("/weatherOfCities", weatherController.weather)
router.post('/meme/editMeme', memeController.memeFun)

module.exports = router;