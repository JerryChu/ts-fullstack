import { Model, DataTypes } from 'sequelize';
import getSequelize from '.';

export interface ProductType {
  id?: string;
  name: string;
  user_id?: string;
  price: number;
}

export default class Product extends Model {
}

Product.init({
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
  user_id: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize: getSequelize(),
  tableName: 'product',
  modelName: 'product',
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'mtime',
});
