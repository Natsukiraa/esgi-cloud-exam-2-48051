const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(

    "postgres://dbpgsql_user:Av2D4YVHIgva9VTt347Yf9G9vI3Bxvpf@dpg-co5vp563e1ms73bd2pq0-a.frankfurt-postgres.render.com/dbpgsql",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;