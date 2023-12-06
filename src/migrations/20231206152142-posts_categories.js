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
        allowNull: false,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId: {
        field: 'category_id',
        allowNull: false,
        // unique: true,
        type: Sequelize.INTEGER,
        // autoIncrement: true,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('posts_categories');
  },
};
