const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) =>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({message: "Token não informado!", status: "fail", data: {}})
    }
    const token = authorization?.split(" ")?.[1];
    if(!token){
        return res.status(401).json({message: "Token não informado!", status: "fail", data: {}})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({message: "Token inválido!", status: "fail", data: {}})
        }else{
            req.user = {email: decoded.data.email, _id: decoded.data._id};
            next();
        }
    })
}
module.exports = verifyToken;