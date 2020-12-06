const models = require('../../Models');
const QueryRepository = require('../../Repositories/QueryRepository');
const Station = models.Station;

module.exports = {
    UTILITY : {
        getTableName: () => {
            return Station.tableName;
        }
    },
    DATABASE_ENGINE : {
        insert: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.INSERT(Station.tableName, requestData));
            } catch (e) {
                console.log(`ERR -> Service.Station.DATABASE_ENGINE.insert() : ${e}`);
                throw e;
            }
        },
        get: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.SELECT_SINGLE_BY_ID(Station.tableName, requestData));
            } catch (e) {
                console.log(`ERR -> Service.Station.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
        getAll: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.SELECT_ALL(Station.tableName));
            } catch (e) {
                console.log(`ERR -> Service.Station.DATABASE_ENGINE.getAll() : ${e}`);
                throw e;
            }
        },
        update: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.UPDATE(Station.tableName, requestData));
            } catch (e) {
                console.log(`ERR -> Service.Station.DATABASE_ENGINE.update() : ${e}`);
                throw e;
            }
        },
        delete: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.DELETE(Station.tableName, requestData));
            } catch (e) {
                console.log(`ERR -> Service.Station.DATABASE_ENGINE.get() : ${e}`);
                throw e;
            }
        },
    }

};