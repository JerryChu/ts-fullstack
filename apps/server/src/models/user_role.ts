import { Model, DataTypes, Op } from 'sequelize';
import Role, { RoleType } from './role';
import getSequelize from '.';
import RolePermission, { RolePermissionType } from './role_permission';

export interface UserRoleType {
  user_id: string;
  role_id: string;
  role?: RoleType
  role_permissions?: RolePermissionType[],
}

export default class UserRole extends Model {
  static async findByUserId(userId: string) {
    this.belongsTo(Role, { foreignKey: 'role_id' });
    this.hasMany(RolePermission, { foreignKey: 'role_id' });

    const result = await UserRole.findAll({
      include: [Role, RolePermission],
      where: {
        user_id: {
          [Op.eq]: userId,
        }
      }
    });
    return result;
  }
}

UserRole.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  role_id: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
}, {
  sequelize: getSequelize(),
  tableName: 'user_role',
  modelName: 'user_role',
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'mtime',
});
