const Flower = require('../models/Flower')

const getAllVases = async (req,res) => {
    try{
        const vases = await Flower.find({category: 'vases'})
        res.status(200).json({vases, amount: vases.length, success: true})

    }catch (error){
        res.status(500).json({msg: error})
    }
}

const createVases = async (req,res) => {
    try{
        const vase_data = req.body
        vase_data.category = 'vases'
        const vase = await Flower.create(vase_data)
        res.status(201).json({vase})

    }catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports =  {getAllVases,createVases}