const Service = require('../Services/Database/User');

module.exports = {
    getTableName: () => {
        return Service.UTILITY.getTableName()
    },
    get: (req, res, next) => {
        Service.DATABASE_ENGINE.get(req.query)
        .then((user) => {
            if (user) {
                let response = {status: 201, content: {success: true, user: user}};
                res.status(response.status).json(response.content);
            } else {
                let response = {status: 400, content: {success:false, message:"ERR_USER_DOESNT_EXISTS"}};
                res.status(response.status).json(response.content);
            }
        }).catch((err) => {
            let response = {status: 500, content: {success: true, message: err.message}};
            res.status(response.status).json(response.content);
        })
    },
    getAll: (req, res, next) => {
        Service.DATABASE_ENGINE.getAll(req.query)
        .then((users) => {
            let response = {status: 201, content: {success:true, users:users}};
            res.status(response.status).json(response.content);
        }).catch((err) => {
            let response = {status: 400, content: {success:false, message:err.message}};
            return res.status(response.status).json(response.content)
        })
    }
};