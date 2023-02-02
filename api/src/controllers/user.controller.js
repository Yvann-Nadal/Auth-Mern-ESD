const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const UserController = {
    getAll: async (req, res) => {
        const users = await User.find();
        res.send(users);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { lastName, firstName, password } = req.body;
        let credentials = {};

        if (!password) {
            credentials = {
                lastName,
                firstName
            }
        } else if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            credentials = {
                lastName,
                firstName,
                password: hashedPassword
        }
            
        }

        try {

            const user = await User.findByIdAndUpdate(id, credentials, { new: true });

            const accessToken = jwt.sign({ _id: id, lastName: user.lastName, firstName: user.firstName, password: user.password }, process.env.JWT_SECRET, {
                expiresIn: 86400
            })

            res.send({ accessToken })

        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = UserController