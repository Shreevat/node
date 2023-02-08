const jwt = require("jsonwebtoken")
const generateToken = (user) => {
    jwt.sign({
        id: userController._id,
        email: user.email,
        role: user.role,
        status: user.status
    },
    "iamsecret"
    );
};