import { Model, DataTypes } from 'sequelize';
import getSequelize from '.';

export interface RolePermissionType {
  role_id: string;
  resource_code: string;
  operation: string;
}

export default class RolePermission extends Model {
}

RolePermission.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  role_id: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  resource_code: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  operation: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
}, {
  sequelize: getSequelize(),
  tableName: 'role_permission',
  modelName: 'role_permission',
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'mtime',
});
