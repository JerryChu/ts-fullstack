import User, { UserType } from '../models/user';
import UserRole, { UserRoleType } from '../models/user_role';
export class UserService {
  async findByName(name: string) {
    const user = User.findOne({
    });
    return user;
  }

  async findAll({ id, pageIndex = 0, pageSize = 10, where }) {
  }

  async modify({ id, values }) {
  }

  async remove({ id }) {
  }

  async create(params: UserType) {
    return await User.create(params);
  }

  async setRole(params: UserRoleType) {
    return await UserRole.create(params);
  }
}

export default new UserService();
