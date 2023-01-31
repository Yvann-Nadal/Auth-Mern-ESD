const Shop = require('../models/shop.model');

const ShopController = {
    create: async (req, res) => {
        const { name } = req.body
        const { user } = req

        const shop = new Shop({name, user})
        
        try {
            await shop.save()
            res.status(201).send(shop)
        } catch (error) {

            res.status(500).send({message: error.message})
        }
    },
}

module.exports = ShopController