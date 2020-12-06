const models = require('../../Models');
const QueryRepository = require('../../Repositories/QueryRepository');
const User = models.User;

module.exports = {
    UTILITY : {
        getTableName: () => {
            return User.tableName;
        }
    },
    DATABASE_ENGINE : {
        checkUserExists: async (requestData) => {
            try {
                return (
                    await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.USERS.SELECT_SINGLE_BY_ID(requestData)) !== null
                );
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.checkUserExists() : ${e}`);
                throw e;
            }
        },
        create: async (requestData) => {
            try {
                await models.sequelize.query();
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.create() : ${e}`);
                throw e;
            }
        },
        get: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.USER.SELECT_SINGLE_BY_ID(requestData));
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
        getAll: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.USER.SELECT_ALL());
            } catch (e) {
                console.log(`ERR -> Service.User.DATABASE_ENGINE.getAll() : ${e}`);
                throw e;
            }
        }
    }

};