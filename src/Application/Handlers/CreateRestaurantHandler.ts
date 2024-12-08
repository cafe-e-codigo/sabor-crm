import { Handler } from '../Mediator/Handler';
import { CreateRestaurant } from '../UseCase/Restaurant/CreateRestaurant';
import { CreateRestaurantCommand } from '../Command/CreateRestaurantCommand';

export class CreateRestaurantHandler implements Handler<CreateRestaurantCommand, void> {
  constructor(private createRestaurant: CreateRestaurant) {}
  async handle(command: CreateRestaurantCommand): Promise<void> {
    return await this.createRestaurant.execute(command);
  }
}
