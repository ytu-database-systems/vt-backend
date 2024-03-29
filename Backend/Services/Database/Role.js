const models = require('../../Models');
const QueryRepository = require('../../Repositories/QueryRepository');
const Role = models.Role;

const _this = module.exports = {
    UTILITY : {
        getTableName: () => {
            return Role.tableName;
        }
    },
    DATABASE_ENGINE : {
        insert: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.INSERT(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                console.log(`ERR -> Service.Role.DATABASE_ENGINE.insert() : ${e}`);
                throw e;
            }
        },
        get: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.SELECT_SINGLE_BY_ID(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                console.log(`ERR -> Service.Role.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
        getAll: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.SELECT_ALL(_this.UTILITY.getTableName()));
            } catch (e) {
                console.log(`ERR -> Service.Role.DATABASE_ENGINE.getAll() : ${e}`);
                throw e;
            }
        },
        update: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.UPDATE(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                console.log(`ERR -> Service.Role.DATABASE_ENGINE.update() : ${e}`);
                throw e;
            }
        },
        delete: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.DELETE(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                console.log(`ERR -> Service.Role.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
    }

};