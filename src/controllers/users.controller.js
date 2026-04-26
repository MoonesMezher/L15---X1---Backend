const { users } = require("../models/User");

class UsersController {
    getAll = (req, res) => {
        res.status(200).json(users);
    }

    getById = (req, res) => {
        const id = +req.params.id;
        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json("Not Found");

        res.status(200).json(user);
    }

    create = (req, res) => {
        const { username, age } = req.body;

        users.push({ id: Math.random(), username, age })

        res.status(201).json("Created");
    }
}

module.exports = new UsersController();