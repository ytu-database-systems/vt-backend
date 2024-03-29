const models = require('../../Models');
const QueryRepository = require('../../Repositories/QueryRepository');
const Taxi = models.Taxi;

const _this = module.exports = {
    UTILITY : {
        getTableName: () => {
            return Taxi.tableName;
        }
    },
    DATABASE_ENGINE : {
        insert: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.INSERT(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                let errorMessage = `ERR -> Service.Taxi.DATABASE_ENGINE.insert() : ${e}`;
                console.log(errorMessage);
                throw new Error(errorMessage);
            }
        },
        get: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.SELECT_SINGLE_BY_ID(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                let errorMessage = `ERR -> Service.Taxi.DATABASE_ENGINE.get() : ${e}`;
                console.log(errorMessage);
                throw new Error(errorMessage);
            }
        },
        getAll: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.SELECT_ALL(_this.UTILITY.getTableName()));
            } catch (e) {
                let errorMessage = `ERR -> Service.Taxi.DATABASE_ENGINE.getAll() : ${e}`;
                console.log(errorMessage);
                throw new Error(errorMessage);
            }
        },
        update: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.UPDATE(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                let errorMessage = `ERR -> Service.Taxi.DATABASE_ENGINE.update() : ${e}`;
                console.log(errorMessage);
                throw new Error(errorMessage);
            }
        },
        delete: async (requestData) => {
            try {
                return await models.sequelize.query(QueryRepository.CUSTOM_QUERIES.GENERAL.DELETE(_this.UTILITY.getTableName(), requestData));
            } catch (e) {
                let errorMessage = `ERR -> Service.Taxi.DATABASE_ENGINE.delete() : ${e}`;
                console.log(errorMessage);
                throw new Error(errorMessage);
            }
        },
    }

};