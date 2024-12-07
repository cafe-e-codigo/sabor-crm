import UseCase from "../UseCase";
import {CreateStockCommand} from "../../Command/CreateStockCommand";
import {StockRepository} from "../../Repository/StockRepository";
import {Stock} from "../../../Domain/Entitity/Stock";

export class CreateStock implements UseCase<CreateStockCommand, void>{

	constructor(readonly stockRepository: StockRepository) {
	}

	async execute(input: CreateStockCommand): Promise<void> {
		if(!input.restaurantId) throw new Error('Stock not created, invalid restaurant');
		const stock: Stock = Stock.create(input);
		await this.stockRepository.save(stock);
	}
}