import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next)  => {
    try {
        const token = req.cookies.tokenl;
        if(!token){
            return res.status(401).json({message:"No token, authorization denied",success:false})
        }
        const decode = await jwt.verify(token,process.env.SECRET_KEY)
    }catch(error){

    }
}
