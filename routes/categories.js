var router = require('express').Router();
const CategorySchema = require('../models/Categories')


router.post('/addCategories', async (req, res) => {
    console.log(req.body);
    const category = new CategorySchema(req.body)
    try{
        await category.save();
        res.status(201).send(CategorySchema)
    }catch (e){
        console.log(e);
        res.status(400).send(e)
    }
})

router.get('/getCategories', async (req, res) => {
    try{
       const category = await CategorySchema.find({})
       res.send(category);
    }catch(e){
        res.status(400).send(e)
    }
    //res.send("data added")
})

module.exports = router;