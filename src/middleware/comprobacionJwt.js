import jwt from "jsonwebtoken";

const comprobacionJwt = (req, res, next) => {
    const token = req.header("auth-token"); 
    try {
        if (!token){
            return res.status(401).send("Acceso denegado");
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY); 
            req.usuario = verifyToken;
            next();
        }
    } catch (error){
        res.status(400).send("error");
    }
}

export default comprobacionJwt