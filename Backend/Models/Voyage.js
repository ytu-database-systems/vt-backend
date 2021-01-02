const models = require(".");
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Voyage = sequelize.define('Voyage', {
        id: {
            type: DataTypes.INTEGER,
            field:'id',
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        workerId: {
            field: 'workerId',
            type: DataTypes.INTEGER
        },
        taxiId: {
            field: 'taxiId',
            type: DataTypes.INTEGER
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
        tableName: 'Voyages',
        timestamps: true,
        indexes: [

        ]
    });
    Voyage.associate = function (models) {
        Voyage.belongsTo(models.Worker, {
            foreignKey: 'workerId',
            targetKey: 'id'
        });
        Voyage.belongsTo(models.Taxi, {
            foreignKey: 'taxiId',
            targetKey: 'id'
        });
    };
    return Voyage;
};