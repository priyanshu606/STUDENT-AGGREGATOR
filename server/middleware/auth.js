
const {verifyToken} = require('../service/auth')
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(' ')[1];
  console.log("Token:", token);
  const user = verifyToken(token);
  console.log("Verified User:", user);
  if (!user) {
    return res.status(401).json({ msg: "Unauthorized: Invalid token" });
  }

  req.user = user;
  next();
}

module.exports = {
    authMiddleware
}