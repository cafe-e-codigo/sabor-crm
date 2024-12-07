import {CreateRestaurant} from "../../src/Application/UseCase/Restaurant/CreateRestaurant";
import {Mediator} from "../../src/Application/Mediator/Mediator";
import {CreateRestaurantHandler} from "../../src/Application/Handlers/CreateRestaurantHandler";
import {InMemoryRestaurantRepository} from "../../src/Infra/InMemoryRepository/InMemoryRestaurantRepository";
import {CreateRestaurantCommand} from "../../src/Application/Command/CreateRestaurantCommand";
import {Restaurant} from "../../src/Domain/Entitity/Restaurant";
import {InMemoryStockRepository} from "../../src/Infra/InMemoryRepository/InMemoryStockRepository";
import {CreateStock} from "../../src/Application/UseCase/Stock/CreateStock";
import {CreateStockHandler} from "../../src/Application/Handlers/CreateStockHandler";
import {CreateStockCommand} from "../../src/Application/Command/CreateStockCommand";
import {Stock} from "../../src/Domain/Entitity/Stock";

describe('[Integration]: Criação de um novo restaurante', () => {
	test('Deve criar um novo restaurante', async () =>  {
		//Criação do input de entrada
		const inputCreate: CreateRestaurantCommand = new CreateRestaurantCommand(
			'Pizzaria Delícia',
			'Rua das Flores, 123',
			'pizzariadelicia@gmail.com',
			'1234-5678',
			'Uma deliciosa pizzaria com opções veganas.',
			'Pizzaria',
			'http://pizzariadelicia.com',
			'Seg-Sex 18:00 - 23:00',
			'43.872.171/0001-13'
		);

		//Configuração do Repository e Caso de uso
		const restaurantRepository: InMemoryRestaurantRepository = new InMemoryRestaurantRepository();
		const createRestaurant: CreateRestaurant = new CreateRestaurant(restaurantRepository);
		await createRestaurant.execute(inputCreate);
		expect(createRestaurant).toBeDefined();

		//Verifico se o dado foi persistido no banco de dados
		const restaurants: Restaurant[] = await restaurantRepository.findAll();
		expect(restaurants[0].name).toEqual('Pizzaria Delícia');
	});

	test('Não deve criar um novo restaurante sem nome', async () => {
		//Criação do input de entrada
		const inputCreate: CreateRestaurantCommand = new CreateRestaurantCommand(
			'',
			'Rua das Flores, 123',
			'pizzariadelicia@gmail.com',
			'1234-5678',
			'Uma deliciosa pizzaria com opções veganas.',
			'Pizzaria',
			'http://pizzariadelicia.com',
			'Seg-Sex 18:00 - 23:00',
			'12.123.456/0001-12'
		);

		//Crio uma nova pizzaria
		const restaurantRepository: InMemoryRestaurantRepository = new InMemoryRestaurantRepository();
		const createRestaurant = new CreateRestaurant(restaurantRepository)
		await expect(() =>  createRestaurant.execute(inputCreate)).rejects.toThrow(new Error('Invalid name'));
	});

	test('Não deve criar um novo restaurante com CNPJ inválido', async () => {
		//Criação do input de entrada
		const inputCreate: CreateRestaurantCommand = new CreateRestaurantCommand(
			'Pizzaria Delícia',
			'Rua das Flores, 123',
			'pizzariadelicia@gmail.com',
			'1234-5678',
			'Uma deliciosa pizzaria com opções veganas.',
			'Pizzaria',
			'http://pizzariadelicia.com',
			'Seg-Sex 18:00 - 23:00',
			'12.123.456/0001-12'
		);

		//Crio uma nova pizzaria
		const restaurantRepository: InMemoryRestaurantRepository = new InMemoryRestaurantRepository();
		const createRestaurant: CreateRestaurant = new CreateRestaurant(restaurantRepository);
		await expect(() => createRestaurant.execute(inputCreate)).rejects.toThrow(new Error('Invalid CNPJ'));
	});

	test('Deve criar um restaurante com um estoque', async () => {
		//Criação do input de entrada
		const inputCreate: CreateRestaurantCommand = new CreateRestaurantCommand(
			'Pizzaria Delícia',
			'Rua das Flores, 123',
			'pizzariadelicia@gmail.com',
			'1234-5678',
			'Uma deliciosa pizzaria com opções veganas.',
			'Pizzaria',
			'http://pizzariadelicia.com',
			'Seg-Sex 18:00 - 23:00',
			'43.872.171/0001-13'
		);

		//Configuração do Mediator, Repository e Caso de uso
		const mediator: Mediator = new Mediator();
		const restaurantRepository: InMemoryRestaurantRepository = new InMemoryRestaurantRepository();
		const stockRepository: InMemoryStockRepository = new InMemoryStockRepository();
		const createStock: CreateStock = new CreateStock(stockRepository);
		mediator.register('CreateStockCommand', new CreateStockHandler(createStock));
		const createRestaurant: CreateRestaurant = new CreateRestaurant(restaurantRepository, mediator);
		await createRestaurant.execute(inputCreate);
		expect(createRestaurant).toBeDefined();

		//Verifico se existe um stoque para a pizzaria cadastrada.
		const restaurants: Restaurant[] = await restaurantRepository.findAll();
		const stock: Stock[]  = await stockRepository.findAll();
		expect(restaurants[0].id).toEqual(stock[0].restaurantId)
	});
});