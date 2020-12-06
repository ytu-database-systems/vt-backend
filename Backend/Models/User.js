const regexModule = require("../Modules/RegexModule");
const passwordModule = require("../Modules/PasswordModule");
//const converter = require("../Modules/turkishToEnglish")
const models = require(".");
const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'firstName',
            validate: {
                notEmpty: {msg: 'User firstName cannot be empty.'}
            }
        },
        middleName: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'middleName',
            validate: {
                notEmpty: {msg: 'User middleName cannot be empty.'}
            }
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'lastName',
            validate: {
                notEmpty: {msg: 'User lastName cannot be empty.'}
            }
        },
        username: {
            type: DataTypes.STRING,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: 'Password cannot be empty.'},
            }
        },
        roleId: {
            field: 'roleId',
            type: DataTypes.INTEGER
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                try {
                    user.password = await passwordModule.scrypt(user.password);
                } catch (err) {
                    console.log(err.message);
                    throw {message: 'Encryption Error.'};
                }
            }
        },
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        tableName: 'Users',
        indexes: [
            {unique:true, fields:['username']}
        ]
    });
    User.associate = function (models) {
        User.belongsTo(models.Role, {
            foreignKey: 'roleId',
            targetKey: 'id'
        });
    };

    User.ValidateCustom = async (user) => {
        return true; // Assume that valid for everything.
    };
    return User;
};