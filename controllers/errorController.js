const {INTERNAL_SERVER_ERROR} = require("http-status-codes");
const httpStatus = require("http-status-codes");

module.exports = {
    pageNotFoundError: (req, res) => {
        let errorCode = httpStatus.NOT_FOUND;
        res.status(errorCode);
        res.render("error");
    },
    internalServerError: (error, req, res, next) => {
        let errorCode =httpStatus.INTERNAL_SERVER_ERROR;
        res.status(errorCode);
        res.send(`${errorCode}, Sorry! Something went wrong with your application`);
        console.error(error.stack)
    }
};