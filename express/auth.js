const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  try { 
    const token = req.headers.authorization;
    console.log("TOKEN", token)
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    const decoded = jwt.verify(token, config.TOKEN_KEY);
    console.log("decoded", decoded)
    req.user = decoded;
    return next();
  }
  catch (err) {
    console.log(err)
    return res.status(401).send({"status":401,"message":err.message,"data":err});
  }
};

module.exports = {
  verifyToken
}
