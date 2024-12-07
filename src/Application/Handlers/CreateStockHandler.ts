import {Handler} from "../Mediator/Handler";
import {CreateStockCommand} from "../Command/CreateStockCommand";
import {CreateStock} from "../UseCase/Stock/CreateStock";

export class CreateStockHandler implements Handler<CreateStockCommand, void>{

	constructor(readonly createStock: CreateStock) {
	}

  async handle(command: CreateStockCommand): Promise<void> {
      await this.createStock.execute(command);
  }
}