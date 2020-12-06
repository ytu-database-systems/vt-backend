const regexModule = require("../Modules/RegexModule");
const passwordModule = require("../Modules/PasswordModule");
//const converter = require("../Modules/turkishToEnglish")
const models = require(".");
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const AvailabilityState = sequelize.define('AvailabilityState', {
        id: {
            type: DataTypes.INTEGER,
            field:'id',
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'state',
            validate: {
                notEmpty: {msg: 'AvailabilityState state cannot be empty.'}
            }
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        createdAt: {
            field: 'createdAt',
            defaultValue: Sequelize.fn('now'),
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updatedAt',
            defaultValue: Sequelize.fn('now'),
            type: DataTypes.DATE
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        tableName: 'AvailabilityStates',
        timestamps: true,
        indexes: [
            {unique:true, fields:['state']}
        ]
    });
    AvailabilityState.associate = function (models) {
        /*Worker.belongsTo(models.Role, {
            foreignKey: 'roleId',
            targetKey: 'id'
        });*/
    };
    return AvailabilityState;
};