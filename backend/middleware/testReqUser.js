//middleware function to verify the access toekn
function testReqUser(req, res, next) {
    req.user = {
        email: "gbaren39@gmail.com",
        phone: "0529400163"
    };
    next();
}

module.exports = testReqUser;