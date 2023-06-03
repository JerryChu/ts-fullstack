import Product, { ProductType } from '../models/product';

export class ProductService {

  async findAll(page = 0, count = 10, where: any) {
    return await Product.findAll({
      offset: page * count,
      limit: count,
      where,
    });
  }

  async findById(id: string) {
    return await Product.findByPk(id);
  }

  async modify(id: string, values: ProductType) {
    const target = await this.findById(id);
    if (!target) return null;

    return await target.update(values);
  }

  async remove(id: string) {
    const target = await this.findById(id);
    console.log(target);
    if (!target) return null;

    return await target.destroy();
  }

  async create(values: ProductType) {
    return await Product.create(values);
  }

}

export default new ProductService();
