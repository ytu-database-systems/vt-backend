const Sequelize = require('sequelize');
const ReservedProperties = ["createdAt", "updatedAt"];

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
    CUSTOM_QUERIES : {
        GENERAL : {
            SELECT_SINGLE_BY_ID : (tableName, requestData) => {return `SELECT * FROM "${tableName}" WHERE id='${requestData.id}'`},
            SELECT_ALL : (tableName) =>  {return `SELECT * FROM "${tableName}"`},
            INSERT : (tableName, data) => {
                let dataLength = Object.keys(data).length;
                let ValuesQuery = "";
                let i = 0;
                i = 0;
                while (i < dataLength - 1 ) {
                    ValuesQuery += "'" + Object.values(data)[i] + "', ";
                    i++;
                }
                ValuesQuery += "'" + Object.values(data)[dataLength-1] + "'";

                return `INSERT INTO "${tableName}" ( ${Object.keys(data).join(', ')} ) VALUES(${ValuesQuery});`
            },
            UPDATE : (tableName, data) => {
                let dataLength = Object.keys(data).length;
                let ValuesQuery = "";
                let i = 0;
                i = 0;
                while (i < dataLength) {
                    if (Object.keys(data)[i] === "id") {
                        i++;
                        continue;
                    }
                    ValuesQuery += `${Object.keys(data)[i]} = '${Object.values(data)[i]}',
                            `;
                    i++;
                }
                ValuesQuery += `"updatedAt" = now()`;
                console.log("QUERY : ", `UPDATE "${tableName}" SET 
                            ${ValuesQuery}
                            WHERE id=${data.id}`);
                return `UPDATE "${tableName}" SET 
                            ${ValuesQuery}
                            WHERE id=${data.id}`
            },
            DELETE: (tableName, data) => {
                let dataLength = Object.keys(data).length;
                let WhereQuery = "";
                let i = 0;
                if (dataLength === 1)
                    WhereQuery += `${Object.keys(data)[0]} = '${Object.values(data)[0]}'`;
                else {
                    while (i < dataLength-1) {
                        WhereQuery += `${Object.keys(data)[i]} = '${Object.values(data)[i]}' And
                                `;
                        i++;
                    }
                    WhereQuery += `${Object.keys(data)[dataLength - 1]} = '${Object.values(data)[dataLength - 1]}'
                            `;
                }

                console.log("QUERY : ", `DELETE FROM "${tableName}"
                        WHERE id=${data.id}`);
                return `DELETE FROM "${tableName}"
                        WHERE ${WhereQuery}`
            }

        },
        USER: {
            CHECK_IF_EXISTS : (requestData) => {return `SELECT * FROM "Users" WHERE username='${requestData.username}'`},
            SELECT_SINGLE_BY_ID : (requestData) => {return `SELECT * FROM "Users" WHERE id='${requestData.id}'`},
            SELECT_ALL : () =>  {return `SELECT * FROM "Users"`}
        },
        ROLE: {
            SELECT_SINGLE_BY_ID : (requestData) => {return `SELECT * FROM "Roles" WHERE id='${requestData.id}'`},
            SELECT_ALL : () =>  {return `SELECT * FROM "Roles"`},
            INSERT : (data) => {
                let dataLength = Object.keys(data).length;
                let ValuesQuery = "";
                let i = 0;
                i = 0;
                while (i < dataLength - 1 ) {
                    ValuesQuery += "'" + Object.values(data)[i] + "', ";
                    i++;
                }
                ValuesQuery += "'" + Object.values(data)[dataLength-1] + "'";

                return `INSERT INTO "Roles" ( ${Object.keys(data).join(', ')} ) VALUES(${ValuesQuery});`
            },
            UPDATE : (data) => {
                let dataLength = Object.keys(data).length;
                let ValuesQuery = "";
                let i = 0;
                i = 0;
                while (i < dataLength) {
                    if (Object.keys(data)[i] === "id") {
                        i++;
                        continue;
                    }
                    ValuesQuery += `${Object.keys(data)[i]} = '${Object.values(data)[i]}',
                            `;
                    i++;
                }
                ValuesQuery += `"updatedAt" = now()`;
                console.log("QUERY : ", `UPDATE "Roles" SET 
                            ${ValuesQuery}
                            WHERE id=${data.id}`);
                return `UPDATE "Roles" SET 
                            ${ValuesQuery}
                            WHERE id=${data.id}`
            },
            DELETE: (data) => {
                let dataLength = Object.keys(data).length;
                let WhereQuery = "";
                let i = 0;
                if (dataLength === 1)
                    WhereQuery += `${Object.keys(data)[0]} = '${Object.values(data)[0]}'`;
                else {
                    while (i < dataLength-1) {
                        WhereQuery += `${Object.keys(data)[i]} = '${Object.values(data)[i]}' And
                                `;
                        i++;
                    }
                    WhereQuery += `${Object.keys(data)[dataLength - 1]} = '${Object.values(data)[dataLength - 1]}'
                            `;
                }

                console.log("QUERY : ", `DELETE FROM "Roles"
                        WHERE id=${data.id}`);
                return `DELETE FROM "Roles"
                        WHERE ${WhereQuery}`
            }
        },

    }
};