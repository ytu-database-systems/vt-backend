module.exports = {
    GET_QUERY_PREFIX : { // Parametrelerle üretilebilecek kadar basit sorgular için
        select: (baseTable, attributes, whereOpts, orderOpts, limitOpts) => {
            let query =  `SELECT ${attributes} FROM ${baseTable}`
        },
        update: () => {
            return "";
        },
        delete: (baseTable, primaryKeyName, primaryKeyName) => {
            return "";
        },
        insert: () => {
            return "";
        }
    },
    CUSTOM_QUERIES : { // Standart 4 Operasyon dışında veya üretmesi zor olan sorgular için.
        SELECT_USERS : "SELECT * FROM Users;"
    }
};