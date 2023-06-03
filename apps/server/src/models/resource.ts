import { Model, DataTypes } from 'sequelize';
import getSequelize from '.';

export interface ResourceType {
  name: string;
  code: string;
}

export default class Resource extends Model {
}

Resource.init({
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
  type: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
}, {
  sequelize: getSequelize(),
  tableName: 'resource',
  modelName: 'resource',
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'mtime',
});
