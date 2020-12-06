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
        }
    }

};