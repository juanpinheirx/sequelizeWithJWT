module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      field: 'display_name',
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(255),
      allowNull: false,
    }
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });
  User.associate = (models) => {
    User.hasOne(models.BlogPost, {
      foreignKey: 'userId', as: 'user_id',
    })
  }
  return User;
}