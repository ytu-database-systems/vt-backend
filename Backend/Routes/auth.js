const router = require('express').Router();
const Controller = require('../Controllers/AuthController');
const authenticator = require('../Middlewares/Authenticator');

let tableName = Controller.getTableName();

router.post('/signup', Controller.signup);
//router.post('/login', Controller.loginUser);
//router.get('/logout', Controller.logoutUser);

/*
*  TODO: PERMISSION MIDDLEWARE
* router.get('/preventUsers', authenticator.authenticate, userController.preventUsers);
* router.get('/allowUsers', authenticator.authenticate,  userController.allowUsers);
*
*/

module.exports = router;
