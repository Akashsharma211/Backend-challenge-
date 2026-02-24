const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');




async function registerUser(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await userModel.create({ username, email, password });
        const isUserAlreadyExists = await userModel.findOne({ email });

        if(isUserAlreadyExists) {
            return res.status(400).json({
                message: 'User with this email already exists'
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        );
        res.cookie("token", token);

        res.status(201).json({
            message: 'User registered successfully',
            user
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error registering user',
            error: error.message
        });
    }
}

module.exports = {registerUser}