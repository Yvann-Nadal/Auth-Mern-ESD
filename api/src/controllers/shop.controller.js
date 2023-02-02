const Shop = require('../models/shop.model');

const ShopController = {
    getAll: async (req, res) => {

        try {
            const shops = await Shop.find()
            res.status(200).send(shops)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    create: async (req, res) => {
        const { user } = req
        const { name, imageUrl, description, location } = req.body

        const shop = new Shop({ name, imageUrl, description, location, user })

        try {
            await shop.save()
            res.status(201).send(shop)
        } catch (error) {

            res.status(500).send({ message: error.message })
        }
    },
}

module.exports = ShopController