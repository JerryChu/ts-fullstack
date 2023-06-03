import { Model, DataTypes } from 'sequelize';
import getSequelize from './';

export interface RoleType {
  name: string;
  code: string;
}

export default class Role extends Model {
}

Role.init({
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
}, {
  sequelize: getSequelize(),
  tableName: 'role',
  modelName: 'role',
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'mtime',
});
