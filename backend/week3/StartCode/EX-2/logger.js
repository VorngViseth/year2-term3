function logger(req, res, next) {
    const timeStamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;

    console.log(`${timeStamp} ${method} ${url}`);

    next();
}

export default logger;