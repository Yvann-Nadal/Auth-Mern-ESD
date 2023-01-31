const UserController = {
    getAll: async (req, res) => {
        const users = await User.find();
        res.send(users);
    },
    update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.id, req.body, { new: true });
            res.send(user);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
}