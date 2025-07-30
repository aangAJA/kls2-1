'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_pemesanans', {
      detail_pemesananID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pemesanan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pemesanans',
          key: 'pemesananID'
        },
      },
      id_kamar: {
        type: Sequelize.INTEGER
      },
      tgl_akses: {
        type: Sequelize.DATEONLY
      },
      harga: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_pemesanans');
  }
};