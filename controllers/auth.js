const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { compareHash } = require('../utils/index');

const router = express.Router();

/* GET users listing. */
router.post('/jwt-auth', async (req, res) => {
    // const userData = req.body;
    const user = await User.findOne({
        $or: [
            { username: req.body.username || '' },
            { email: req.body.email || '' },
        ],
    }).exec();
    if (user && user.password && compareHash(user.password, req.body.password)) {
        const secretKey = process.env.PORTFOLIO_JWT_SECRET;
        const jwtToken = jwt.sign({
            user: user.username,
            email: user.email,
        }, secretKey, { expiresIn: 60 * 60 * 60 });
        res.send(jwtToken);
    } else {
        res.send('Failed To Validate');
    }
});

module.exports = router;
