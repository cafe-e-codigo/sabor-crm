import { RestaurantRepository } from '../../Repository/RestaurantRepository';
import UseCase from '../UseCase';
import { CreateRestaurantCommand } from '../../Command/CreateRestaurantCommand';
import { Restaurant } from '../../../Domain/Entitity/Restaurant';
import { Mediator } from '../../Mediator/Mediator';
import { CreateStockCommand } from '../../Command/CreateStockCommand';
import { CreateStock } from '../Stock/CreateStock';

export class CreateRestaurant implements UseCase<CreateRestaurantCommand, void> {
  constructor(
    readonly restaurantRepository: RestaurantRepository,
    readonly mediator?: Mediator,
  ) {}

  async execute(input: CreateRestaurantCommand): Promise<void> {
    const restaurant: Restaurant = Restaurant.create(input);
    await this.restaurantRepository.save(restaurant);
    await this.mediator?.send(new CreateStockCommand(restaurant.id));
  }
}
