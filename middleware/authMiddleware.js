const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const protectRoute = async (req, res, next) => {
    try {
        // Ensure cookies are properly accessed
        const token = req.cookies?.jwt; // Corrected optional chaining

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
      

        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
        }

        // Find the user (Use `decoded.id`, not `decoded.userId`)
        const user = await User.findById(decoded.id).select('-password');
         // Debugging log

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user; // Attach user to request
        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("Error in protectRoute middleware:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

module.exports = protectRoute;
