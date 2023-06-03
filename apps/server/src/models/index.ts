import { Sequelize } from "sequelize";
import config from '../config';

const { db } = config;
console.log(db);
const sequelize = new Sequelize(db.database, db.user, db.password, {
  ...db,
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
  },
});

export default () => sequelize;
