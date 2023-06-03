import { Model, DataTypes } from 'sequelize';
import getSequelize from './';

export interface UserType {
  id?: string;
  name: string;
  password: string;
  code: string;
}

export default class User extends Model {
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  code: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  password: {
    type: DataTypes.STRING(512),
    allowNull: false,
    defaultValue: '',
  },
}, {
  sequelize: getSequelize(),
  tableName: 'user',
  modelName: 'user',
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'mtime',
});
