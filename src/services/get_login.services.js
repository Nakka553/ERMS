const { login, loginDetailsModel } = require("../models/get_login.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const LoginServices = async (req) => {
    try {
        let data = req.body;

        let result;
        if (data.username.toLocaleLowerCase() == 'admin')
            result = await login(data)
        else {
            result = await loginDetailsModel(data)
        }
        if (data.username == result.recordset[0].USERNAME) {
            const hashedPassword = result.recordset[0].PASSWORD;
            if (await bcrypt.compare(data.password, hashedPassword)) {
                // Create token
                const token = jwt.sign(
                    { username: data.username },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "1h",
                    }
                );
                return { status: 200, message: "Logged in Successfully", data: token }
            }
            return { "status": 300, message: "Invalid password", data: [] }
        }
        else {
            return { status: 300, message: "Invalid user", data: [] }
        }
    }
    catch (error) {
        return { status: 400, message: "Error", data: error }
    }

}

module.exports = {
    LoginServices

}