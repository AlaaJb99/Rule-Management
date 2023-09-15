//middleware function to verify the access toekn
function testReqUser(req, res, next) {
    req.user = {
        email: "",
        phone: ""
    };
    next();
}

module.exports = testReqUser;