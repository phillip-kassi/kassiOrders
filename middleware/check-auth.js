const jwt = require('jsonwebtoken');


module.exports = (req, res, next) =>

{
  try {
    const token = req.headers.auth.split(" ")[1];
    jwt.verify(token, "1234**Dopeboi");
  } catch (error) {
    res.status(401).json({message:'authentitcation failed'});
  }
}
