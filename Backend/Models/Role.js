const models = require(".")
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
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
                notEmpty : {msg: 'Role Name cannot be empty.'}
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
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        timestamps: true,
        tableName: 'Roles',
    });

    Role.associate = function (models) {
        Role.hasMany(models.User, {
            foreignKey: 'roleId',
        });
    };
    return Role;
}