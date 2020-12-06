module.exports = {
    GET_QUERY_PREFIX : { // Parametrelerle üretilebilecek kadar basit sorgular için
        select: (baseTable, attributes, whereOpts, orderOpts, limitOpts) => {
            let query =  `SELECT ${attributes} FROM ${baseTable}`
        },
        update: () => {
            return "";
        },
        delete: (baseTable, primaryKeyName, primaryKeyValue) => {
            return "";
        },
        insert: () => {
            return "";
        }
    },
    CUSTOM_QUERIES : { // Standart 4 Operasyon dışında veya üretmesi zor olan sorgular için.
        USER: {
            CHECK_IF_EXISTS : (requestData) => {return `SELECT * FROM "Users" WHERE username='${requestData.username}'`},
            SELECT_SINGLE_BY_ID : (requestData) => {return `SELECT * FROM "Users" WHERE id='${requestData.id}'`},
            SELECT_ALL : () =>  {return `SELECT * FROM "Users"`}
        },
        ROLE: {
            SELECT_SINGLE_BY_ID : (requestData) => {return `SELECT * FROM "Roles" WHERE id='${requestData.id}'`},
            SELECT_ALL : () =>  {return `SELECT * FROM "Roles"`}
        },

    }
};