const models = require(".");
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Taxi = sequelize.define('Taxi', {
        id: {
            type: DataTypes.INTEGER,
            field:'id',
            primaryKey: true,
            autoIncrement: true
        },
        plate: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'plate',
            validate: {
                notEmpty: {msg: 'Taxi plate cannot be empty.'}
            }
        },
        brand: {
            type: DataTypes.STRING,
            field: "brand",
            allowNull: false,
            validate: {
                notEmpty: {msg: 'Taxi brand cannot be empty.'}
            }
        },
        model: {
            type: DataTypes.STRING,
            field: "model",
            allowNull: false,
            validate: {
                notEmpty: {msg: 'Taxi model cannot be empty.'}
            }
        },
        capacity: {
            type: DataTypes.INTEGER,
            field: "capacity",
            allowNull: false,
            defaultValue: 5,
            validate: {
                notEmpty: {msg: 'Taxi capacity cannot be empty.'}
            }
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        stationId: {
            field: 'stationId',
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
        tableName: 'Taxis',
        timestamps: true,
        indexes: [
            {unique:true, fields:['plate']}
        ]
    });
    Taxi.associate = function (models) {
        Taxi.belongsTo(models.Station, {
            foreignKey: 'stationId',
            targetKey: 'id'
        });
    };

    return Taxi;
};