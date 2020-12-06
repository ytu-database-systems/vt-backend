const models = require(".");
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Worker = sequelize.define('Worker', {
        id: {
            type: DataTypes.INTEGER,
            field:'id',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'name',
            validate: {
                notEmpty: {msg: 'Worker name cannot be empty.'}
            }
        },
        SSN: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            field: 'SSN'
        },
        driverLicense: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "driverLicense",
            validate: {
                notEmpty: {msg: 'Worker driverLicense cannot be empty.'}
            }
        },
        gender: {
            field: 'gender',
            type: DataTypes.STRING
        },
        salary: {
            field: 'salary',
            allowNull: false,
            type: DataTypes.DECIMAL,
            validate: {
                notEmpty: {msg: 'Worker salary cannot be empty.'}
            }
        },
        dateOfBirth : {
            field: 'dateOfBirth',
            allowNull: false,
            type: DataTypes.DATE,
            validate: {
                notEmpty: {msg: 'Worker dateOfBirth cannot be empty.'}
            }
        },
        phone : {
            field: 'phone',
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: {msg: 'Worker phone cannot be empty.'}
            }
        },
        address : {
            field: 'address',
            type: DataTypes.TEXT,
            validate: {
                notEmpty: {msg: 'Worker address cannot be empty.'}
            }
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        stationId: {
            type: DataTypes.INTEGER,
            field: "stateId"
        },
        stateId: {
            type: DataTypes.INTEGER,
            field: "stateId"
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
        tableName: 'Workers',
        timestamps: true,
        indexes: [
            {unique:true, fields:['SSN']},
            {unique:true, fields:['phone']}
        ]
    });
    Worker.associate = function (models) {
        Worker.belongsTo(models.AvailabilityState, {
            foreignKey: 'stateId',
            targetKey: 'id'
        });
        Worker.belongsTo(models.Station, {
            foreignKey: 'stationId',
            targetKey: 'id'
        });
    };

    return Worker;
};