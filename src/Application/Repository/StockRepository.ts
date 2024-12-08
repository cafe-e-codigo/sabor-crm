import { Stock } from '../../Domain/Entitity/Stock';

export interface StockRepository {
  save(stock: Stock): Promise<void>;

  findByRestaurant(restaurantId: string): Promise<Stock>;

  find(id: string): Promise<Stock>;

  findAll(): Promise<Stock[]>;
}
