import { CreateStockCommand } from '../../Application/Command/CreateStockCommand';

export class Stock {
  private constructor(
    private readonly _id: string,
    private readonly _restaurantId: string,
  ) {}

  static create(createStockCommand: CreateStockCommand): Stock {
    const id: string = crypto.randomUUID();
    return new Stock(id, createStockCommand.restaurantId);
  }

  static restore(id: string, restaurantId: string): Stock {
    return new Stock(id, restaurantId);
  }

  get id(): string {
    return this._id;
  }

  get restaurantId(): string {
    return this._restaurantId;
  }
}
