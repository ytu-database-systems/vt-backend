const models = require('../../Models');
const QueryRepository = require('../../Repositories/QueryRepository');
const Role = models.Role;

module.exports = {
    UTILITY : {
        getTableName: () => {
            return Role.tableName;
        }
    },
    DATABASE_ENGINE : {
        insert: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.ROLE.INSERT(requestData));
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.insert() : ${e}`);
                throw e;
            }
        },
        get: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.ROLE.SELECT_SINGLE_BY_ID(requestData));
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
        getAll: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.ROLE.SELECT_ALL());
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.getAll() : ${e}`);
                throw e;
            }
        },
        update: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.ROLE.UPDATE(requestData));
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.update() : ${e}`);
                throw e;
            }
        },
        delete: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.ROLE.DELETE(requestData));
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
    }

};