const token = "xyz123";

function authenticate(req, res, next) {
    const reqHeader = req.query.token;

    if(reqHeader !== token) {
        return res.status(401).send("Unauthorized");
    }
    
    next();
}

export default authenticate;