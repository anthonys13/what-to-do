require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, 
    {
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

// async function connect() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         } catch (error) {
//         console.error('Unable to connect to the database:', error);
//         }
// }

// connect();

module.exports = sequelize;
