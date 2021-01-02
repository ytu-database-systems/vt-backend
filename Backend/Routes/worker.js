const router = require('express').Router();
const Controller = require('../Controllers/WorkerController');
const authenticator = require('../Middlewares/Authenticator');

let tableName = Controller.getTableName();

router.get('/', Controller.getAll);
router.post('/', Controller.insert);
router.patch('/', Controller.update);
router.delete('/', Controller.delete);
//router.get('/logout', Controller.logoutUser);

/*
*  TODO: PERMISSION MIDDLEWARE
* router.get('/preventUsers', authenticator.authenticate, userController.preventUsers);
* router.get('/allowUsers', authenticator.authenticate,  userController.allowUsers);
*
*/

module.exports = router;
