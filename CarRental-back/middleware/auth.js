const jwt = require('jsonwebtoken');

const CreateToken = (user)=>{
var token = jwt.sign({id:user._id},"mazen");
return token
};

const isAuth = async (req, res, next) => {
    try {
        const token = req.header['authorization'];
        const decoded = jwt.verify(token,"mazen");
        console.log("decoded",decoded);
    if (decoded.id){
        req.id = decoded.id 
        next();
    } else {
        res.status(401).send({error: "invalid token!"})
    }
    } catch (error){
        return  res.status(401).send({error: "Please Authenticate" })
        }
    }

module.exports = {
    CreateToken,
    isAuth
}