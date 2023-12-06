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
    PostCategories.belongsTo(models.BlogPost, {
      foreignKey: 'postId', as: 'post_id',
    });
    PostCategories.belongsTo(models.Category, {
      foreignKey: 'categoryId', as: 'category_id',
    })
  };
  return PostCategories;
}