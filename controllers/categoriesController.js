const CategorySchema = require('../models/Categories')


exports.getCategories = async (req, res,) => {
    try{
        const category = await CategorySchema.find({})
        res.status(201).send(category);
     }catch(e){
         res.status(400).send(e)
     }
    
}

exports.addCategories = async (req, res) => {
    console.log("Hello");
    const category = new CategorySchema(req.body)
    try{
        await category.save();
        res.status(201).send(category);
        
    }catch (e){
        console.log(e);
        res.status(400).send(e)
    }
}