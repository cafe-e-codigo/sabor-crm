import {StockRepository} from "../../Application/Repository/StockRepository";
import {Stock} from "../../Domain/Entitity/Stock";

export class InMemoryStockRepository implements StockRepository {
	private readonly stocksData: any;

	constructor() {
		this.stocksData = [];
	}

  async save(stock: Stock): Promise<void> {
      this.stocksData.push({
	      id: stock.id,
	      restaurantId: stock.restaurantId
      });
  }

  async findByRestaurant(restaurantId: string): Promise<Stock> {
      const stockData: any =  this.stocksData.filter((stock: any): any => stock.restaurantId  === restaurantId)[0];
			return Stock.restore(stockData.id, stockData.restaurantId);
  }

  find(id: string): Promise<Stock> {
      throw new Error("Method not implemented.");
  }



	findAll(): Promise<Stock[]> {
		return this.stocksData;
	}
}