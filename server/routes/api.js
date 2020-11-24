const express = require('express')
const router = express.Router()




router.get('/recipes', function (req, res) {
    res.send("OK")
})



router.get('/sanity', function (req, res) {
    res.send("OK")
})


module.exports = router
