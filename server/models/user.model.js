module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        avatar: {
            type: Sequelize.STRING
        }
    });

    User.belongsToMany(User, { as: 'Friends', through: 'friends' });
    return User;
};