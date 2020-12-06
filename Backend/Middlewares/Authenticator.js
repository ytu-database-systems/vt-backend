const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtModule = require('./../Modules/JwtModule');
const passportUtils = require('./../Utils/Passport/passportUtils');

module.exports = {
    initialize: () => {
        passport.use(passportUtils.getStrategy(passportUtils.getOptions()));
        return passport.initialize();
    },
    authenticate: function (req, res, next) {
        let token = jwtModule.extractJwtFromRequest(req) || null;
        let payload = null;

        return passport.authenticate("jwt", {
            session: false
        }, (err, user, info) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            if (!user) {
                return res.status(401).json({
                    status: 'Error',
                    error: 'Authentication Required.'
                });
            }
            try {
                if (token) {
                    payload = jwt.verify(token, process.env.JWT_ENCRYPTION);
                }
            } catch (e) {
                console.log(e)
            }
            console.log("req.user : ", user)
            req.user = user;
            next();
        })(req, res, next);
    }
};