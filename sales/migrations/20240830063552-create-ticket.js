'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      tiketID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'events',
          key: 'eventID'
        }
      },
      userID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'userid'
        }
      },
      seatID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'seats',
          key: 'seatid'
        }
      },
      bookedDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tickets');
  }
};