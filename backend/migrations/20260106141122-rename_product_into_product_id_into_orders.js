'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "Orders",       // table name
      "product",      // old column
      "product_id"    // new column
    );

    // OPTIONAL: change type if needed
    await queryInterface.changeColumn("Orders", "product_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "Orders",       // table name
      "product_id",      // old column
      "product"    // new column
    );

    // OPTIONAL: change type if needed
    await queryInterface.changeColumn("Orders", "product", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
