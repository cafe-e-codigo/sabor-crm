import { ProductRepository } from '../../Repository/ProductRepository';
import { CreateProductCommand } from '../../Command/CreateProductCommand';
import { Product } from '../../../Domain/Entitity/Product';

export default class CreateProduct {
  constructor(readonly productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand): Promise<void> {
    const product: Product = Product.create(command);
    await this.productRepository.save(product);
  }
}
