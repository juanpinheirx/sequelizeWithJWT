module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      field: 'post_id',
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      }
      },
      categoryId: {
        field: 'category_id',
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      through: PostCategory,
      as: 'blog_posts'
    });

    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      through: PostCategory,
      as: 'categories'
    });
  };
  return PostCategory;
}