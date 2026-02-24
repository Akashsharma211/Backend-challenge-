const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router();

router.post('/create', (req, res) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try{
    jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' }); // if token is invalid or expired
    }
    res.send('Post created successfully');
});


module.exports = router;