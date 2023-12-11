module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    }
  });
  Categories.associate = (models) => {
    Categories.hasOne(models.PostCategory, {
      foreignKey: 'categoryId', as: 'category_id',
    })
  }
  return Categories;
}