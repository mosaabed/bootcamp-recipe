const express = require('express')
const router = express.Router()
const urllib = require('urllib')
let temp 


function dataToList(data)
{
    let newListt = []
    for (let obj of data.results)
    {
        let newObj = {
            ingredients: obj.ingredients,
            title: obj.title,
            thumbnail: obj.thumbnail,
            href: obj.href
        } 
        newListt.push(newObj)
    }
    return newListt
}

router.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
    function (err, data, response) {
        if (err) {
        throw err; // you need to handle error
        } 
        temp = data.toString();
        temp= JSON.parse(temp)
        temp = dataToList(temp)
        res.send(temp)
    })
    
})



router.get('/sanity', function (req, res) {
    res.send("OK")
})


module.exports = router
