import { Product } from '../../Domain/Entitity/Product';

export interface ProductRepository {
  save(product: Product): Promise<void>;

  findByRestaurant(restaurantId: string): Promise<Product[]>;

  findByStock(stockId: string): Promise<Product[]>;

  find(id: string): Promise<Product>;

  findAll(): Promise<Product[]>;
}
