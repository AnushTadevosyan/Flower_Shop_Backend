const Flower = require('../models/Flower')

const getAllSignitureBoxes = async (req,res) => {
    try{
        const sign_boxes = await Flower.find({ category: 'signiture_box'})
        res.status(200).json({sign_boxes, amount: sign_boxes.length, success: true})
    }catch (error) {

        res.status(500).json({msg: error})

    }
}

const createSignitureBox = async (req,res) => {
    try{
        const sign_box_data = req.body
        sign_box_data.category = 'signiture_box'
        const sign_box = await Flower.create(sign_box_data)
        res.status(201).json({sign_box_data})

    }catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports =  {getAllSignitureBoxes,createSignitureBox}