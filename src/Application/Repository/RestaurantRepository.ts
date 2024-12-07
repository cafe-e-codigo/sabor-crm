import {Restaurant} from "../../Domain/Entitity/Restaurant";

export interface RestaurantRepository {
	save(restaurant: Restaurant): Promise<void>;
	update(restaurant: Restaurant): Promise<Restaurant>;
	delete(idRestaurant: string): Promise<void>;
	find(idRestaurant: string): Promise<Restaurant>;
	findAll(): Promise<Restaurant[]>;
}