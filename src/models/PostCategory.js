module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    postId: {
      field: 'post_id',
      type: Sequelize.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });
  PostCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      through: PostCategories,
      as: 'blog_posts'
    });

    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      through: PostCategories,
      as: 'categories'
    });
  };
  return PostCategories;
}