const jwt = require('jsonwebtoken');

const generateToken = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "7d" // Corrected from "expiredIn"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days (corrected time calculation)
        httpOnly: true, // Secure against XSS attacks
        sameSite: "strict", // Prevent CSRF
        secure: process.env.NODE_ENV !== "development" // Fixed typo in NODE_ENV
    });

    return token;
};

module.exports = generateToken;
