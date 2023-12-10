'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
      timestamps: false,
      tableName: 'posts_categories',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('posts_categories', null, {});
  },
};
