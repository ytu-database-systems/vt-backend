const Service = require('../Services/Database/Role');

module.exports = {
    getTableName: () => {
        return Service.UTILITY.getTableName()
    },
    get: (req, res, next) => {
        Service.DATABASE_ENGINE.get(req.query)
        .then((result) => {
            if (result) {
                let response = {status: 200, content: {success: true, result: result}};
                res.status(response.status).json(response.content);
            } else {
                let response = {status: 400, content: {success:false, message:"ERR_ROLE_DOESNT_EXISTS"}};
                res.status(response.status).json(response.content);
            }
        }).catch((err) => {
            let response = {status: 500, content: {success: true, message: err.message}};
            res.status(response.status).json(response.content);
        })
    },
    getAll: (req, res, next) => {
        Service.DATABASE_ENGINE.getAll(req.query)
        .then((result) => {
            let response = {status: 200, content: {success:true, result:result[1]}};
            res.status(response.status).json(response.content);
        }).catch((err) => {
            let response = {status: 400, content: {success:false, message:err.message}};
            return res.status(response.status).json(response.content)
        })
    },
    insert : (req, res, next) => {
        Service.DATABASE_ENGINE.insert(req.body)
        .then((result) => {
            if(result) {
                let response = {status: 201, content: {success:true, result:result[1]}};
                res.status(response.status).json(response.content);
            } else {
                let response = {status: 400, content: {success:false, message:"ERR_ROLE_INSERT"}};
                return res.status(response.status).json(response.content)
            }
        }).catch((err) => {
            let response = {status: 400, content: {success:false, message:err.message}};
            return res.status(response.status).json(response.content)
        })
    },
    update : (req, res, next) => {
        Service.DATABASE_ENGINE.update(req.body)
        .then((result) => {
            if(result) {
                let response = {status: 200, content: {success:true, result:result[1]}};
                res.status(response.status).json(response.content);
            } else {
                let response = {status: 400, content: {success:false, message:"ERR_ROLE_UPDATE"}};
                return res.status(response.status).json(response.content)
            }
        }).catch((err) => {
            let response = {status: 400, content: {success:false, message:err.message}};
            return res.status(response.status).json(response.content)
        })
    },
    delete: (req, res, next) => {
        Service.DATABASE_ENGINE.delete(req.query)
        .then((result) => {
            if (result) {
                let response = {status: 200, content: {success: true, result: result}};
                res.status(response.status).json(response.content);
            } else {
                let response = {status: 400, content: {success:false, message:"ERR_ROLE_DOESNT_EXISTS"}};
                res.status(response.status).json(response.content);
            }
        }).catch((err) => {
            let response = {status: 500, content: {success: true, message: err.message}};
            res.status(response.status).json(response.content);
        })
    },
};