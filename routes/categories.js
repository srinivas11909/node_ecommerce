
//const CategorySchema = require('../models/Categories');
const categoriesController = require("../controllers/categoriesController");
var router = require('express').Router();

router
    .route('/')
    .get(categoriesController.getCategories)
    .post(categoriesController.addCategories)

// router.post('/api/v1/addCategories', async (req, res) => {
    // console.log(req.body);
    // const category = new CategorySchema(req.body)
    // try{
    //     await category.save();
    //     res.status(201).send(CategorySchema);
        
    // }catch (e){
    //     console.log(e);
    //     res.status(400).send(e)
    // }
// })

// router.get('/api/v1/getCategories', async (req, res) => {
    // try{
    //    const category = await CategorySchema.find({})
    //    res.send(category);
    // }catch(e){
    //     res.status(400).send(e)
    // }
//     //res.send("data added")
// })

module.exports = router;