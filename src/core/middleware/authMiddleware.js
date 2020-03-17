import jwt from "jsonwebtoken";
import config from "config";

let AuthMiddleware = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!token) {
        return res.json({
            success: false,
            message: "Auth token is not supplied"
        });
    }

    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }

    jwt.verify(token, config.jwtSecretToken, (err, decoded) => {
        if (err) {
            return res.json({
                success: false,
                message: "Token is not valid"
            });
        } else {
            req.user = decoded;
            next();
        }
    });
};

module.exports = AuthMiddleware;
