import {RestaurantRepository} from "../../Application/Repository/RestaurantRepository";
import { Restaurant } from "../../Domain/Entitity/Restaurant";

export class InMemoryRestaurantRepository implements RestaurantRepository {
		private readonly restaurantsData: any;

		constructor() {
			this.restaurantsData = [];
		}

    async save(restaurant: Restaurant): Promise<void> {
        this.restaurantsData.push({
	        id: restaurant.id,
	        name: restaurant.name,
	        address: restaurant.address,
	        email: restaurant.email,
	        phone: restaurant.phone,
	        description: restaurant.description,
	        category: restaurant.category,
	        website: restaurant.website,
	        openingHours: restaurant.openingHours,
	        cnpj: restaurant.cnpj
        });
    }

    update(restaurant: Restaurant): Promise<Restaurant> {
        throw new Error("Method not implemented.");
    }

    delete(idRestaurant: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(idRestaurant: string): Promise<Restaurant> {
        const restaurantData: any = this.restaurantsData.filter((item: any) => item.id === idRestaurant);
				return Restaurant.restore({
					id: restaurantData.id,
					name: restaurantData.name,
					address: restaurantData.address,
					email: restaurantData.email,
					phone: restaurantData.phone,
					description: restaurantData.description,
					category: restaurantData.category,
					website: restaurantData.website,
					openingHours: restaurantData.openingHours,
					cnpj: restaurantData.cnpj
				});
    }

    async findAll(): Promise<Restaurant[]> {
		  const restaurants: Restaurant[] = [];
	    for (const restaurantData of this.restaurantsData) {
				restaurants.push(Restaurant.restore({
					id: restaurantData.id,
					name: restaurantData.name,
					address: restaurantData.address,
					email: restaurantData.email,
					phone: restaurantData.phone,
					description: restaurantData.description,
					category: restaurantData.category,
					website: restaurantData.website, openingHours: restaurantData.openingHours,
					cnpj: restaurantData.cnpj
				}));
	    }
			return restaurants;
    }
}