const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) => {
    //check json web token exists and is verified

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token,'netninjasecret',(err,decodedToken)=>{
            if (err) {
                res.redirect('login');
            }else{
                next()
            }
        })
        
    }
    else{
        res.redirect('login');
    }
}

module.exports = {requireAuth};