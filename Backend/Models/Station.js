const models = require(".")
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Station = sequelize.define('Station', {
        id: {
            type: DataTypes.INTEGER,
            field:'id',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false,
            field: 'name',
            validate: {
                notEmpty : {msg: 'Station Name cannot be empty.'}
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull : false,
            field: 'phone',
            validate: {
                notEmpty : {msg: 'Station phone cannot be empty.'}
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull : false,
            field: 'address',
            validate: {
                notEmpty : {msg: 'Station address cannot be empty.'}
            }
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        managerId: {
            type: DataTypes.INTEGER,
            field: "managerId",
            allowNull: false
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
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        timestamps: true,
        tableName: 'Stations',
    });

    Station.associate = function (models) {
        Station.belongsTo(models.Worker, {
            foreignKey: 'managerId',
            constraints: false
        });
    };
    return Station;
};