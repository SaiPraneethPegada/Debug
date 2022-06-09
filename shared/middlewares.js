const jwt = require("jsonwebtoken");

const log = require("./log");

const IS_MAINTENACE = false;

module.exports = {
    
  validateToken(req, res, next) {
    if (req.headers && req.headers.authorization) {
      const [tokenType, token] = req.headers.authorization.split(" ");
      if (tokenType === "Bearer" && token) {
        try {
          req.user = jwt.verify(token, "Sai&123");
          next();
        } catch (err) {
          log(`Token Error - ${err.message}`);
          res.status(403).json({ message: "User is not authorized" });
        }
      } else {
        res.status(403).json({ message: "User is not authorized" });
      }
    } else {
        res.status(403).json({ message: "User is not authorized" });
    }
  },

  logging(req, _ , next) {
      log(`${req.url} ${req.method}`);
        next();
  },
  

  maintenance(_,res, next) {
    IS_MAINTENACE === "true" ? res.send("Site is under maintenance") : next();
  }
};
