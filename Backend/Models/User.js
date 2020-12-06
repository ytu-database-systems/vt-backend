const regexModule = require("../Modules/RegexModule");
const passwordModule = require("../Modules/PasswordModule");
//const converter = require("../Modules/turkishToEnglish")
const models = require(".");
const Sequelize = require('sequelize');

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
            field: 'username',
            allowNull: false,
            validate: {
                notEmpty: {msg: 'User username cannot be empty.'}
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: 'User Password cannot be empty.'},
            }
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        roleId: {
            field: 'roleId',
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
        timestamps: true,
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