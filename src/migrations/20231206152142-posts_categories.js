'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        // unique: true,
        // autoIncrement: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId: {
        field: 'category_id',
        // unique: true,
        type: Sequelize.INTEGER,
        // autoIncrement: true,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    }, {
      tableName: 'posts_categories',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories', null, {});
  },
};
