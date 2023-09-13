const Flower = require('../models/Flower')

const getAllBouquets = async (req,res) => {
    try{
        const bouquets = await Flower.find({ category: 'bouquet'})
        res.status(200).json({bouquets, amount: bouquets.length, success: true})
    }catch (error) {

        res.status(500).json({msg: error})

    }
}

const createBouquet = async (req,res) => {
    try{
        const bouquet_data = req.body
        bouquet_data.category = 'bouquet'
        const bouquet = await Flower.create(bouquet_data)
        res.status(201).json({bouquet})

    }catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports =  {getAllBouquets,createBouquet}