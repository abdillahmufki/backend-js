"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Admin",
        email: "admin@example.com",
        password: "hashed_admin_password",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "User Demo",
        email: "user@example.com",
        password: "hashed_user_password",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
