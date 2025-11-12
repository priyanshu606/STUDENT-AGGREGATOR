const jwt = require('jsonwebtoken')
const JWT_SECRET = 'mynameissheela'

function createToken(user){
  return jwt.sign(
    {id:user._id,email:user.email},
    JWT_SECRET,
)};

function verifyToken(token){
  console.log(token);
  if(!token) return null;
  try {
    return jwt.verify(token,JWT_SECRET);
  } catch (error) {
    return null;
  }
}

module.exports = {
  createToken,
  verifyToken
}