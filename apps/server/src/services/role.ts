import Role, { RoleType } from '../models/role';

export class RoleService {
  async findAll() {
    return await Role.findAll();
  }
}

export default new RoleService();
