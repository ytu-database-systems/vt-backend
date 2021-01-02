const Sequelize = require('sequelize');
const moment = require('moment');
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
            SELECT_SINGLE_BY_ID : (tableName, requestData) => {
                let query = `SELECT * FROM "${tableName}" WHERE id='${requestData.id}'`;

                console.log("SELECT_SINGLE_BY_ID QUERY : ", query);
                return query;
            },
            SELECT_ALL : (tableName) =>  {
                let query = `SELECT * FROM "${tableName}"`;

                console.log("SELECT_ALL QUERY : ", query);

                return query;
            },
            INSERT : (tableName, data) => {
                console.log(data);
                let dataLength = Object.keys(data).length;
                let ValuesQuery = "";
                let i = 0;
                i = 0;
                while (i < dataLength - 1 ) {
                    ValuesQuery += "'" + Object.values(data)[i] + "', ";
                    i++;
                }
                console.log("VALUES_Query : ", ValuesQuery)
                ValuesQuery += "'" + Object.values(data)[dataLength-1] + "'";
                console.log("VALUES_Query : ", ValuesQuery)


                let query = `INSERT INTO "${tableName}" ( ${Object.keys(data).map(a => `"${a}"`).join(', ')} ) VALUES(${ValuesQuery});`

                //console.log("UPDATE QUERY : ", query);

                return query;
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
                    ValuesQuery += `${Object.keys(data).map(a => `"${a}"`)[i]} = '${Object.values(data)[i]}',
                            `;
                    i++;
                }
                ValuesQuery += `"updatedAt" = now()`;

                let query = `UPDATE "${tableName}" SET 
                            ${ValuesQuery}
                            WHERE id=${data.id}`;

                console.log("UPDATE QUERY : ", query);

                return query;
            },
            DELETE: (tableName, data) => {
                /*let dataLength = Object.keys(data).length;
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
                }*/

                let query = `DELETE FROM "${tableName}" WHERE id=${data.id}`;

                console.log("DELETE QUERY : ", query);

                return query;
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