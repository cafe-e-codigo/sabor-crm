import {Mediator} from "../../src/Application/Mediator/Mediator";
import {CreateStockCommand} from "../../src/Application/Command/CreateStockCommand";
import {InMemoryStockRepository} from "../../src/Infra/InMemoryRepository/InMemoryStockRepository";
import {CreateStock} from "../../src/Application/UseCase/Stock/CreateStock";
import {CreateStockHandler} from "../../src/Application/Handlers/CreateStockHandler";
import {Stock} from "../../src/Domain/Entitity/Stock";

describe('[Integration]: Criação de um estoque para uma pizzaria', () => {
	test('Deve criar um novo estoque para uma pizzaria', async () => {
		//Criação de um ID para simular uma pizzaria cadastrada no sistema;
		const restaurantId: string = crypto.randomUUID();

		//Criação do input de entrada
		const inputCreateStock: CreateStockCommand = new CreateStockCommand(restaurantId);

		//Criação do Repository e execução do caso de Uso
		const stockRepository: InMemoryStockRepository = new InMemoryStockRepository();
		const createStock: CreateStock = new CreateStock(stockRepository);
		await createStock.execute(inputCreateStock);
		expect(createStock).toBeDefined();

		//Verifica se o estoque foi cadastrado no banco
		const stock: Stock = await stockRepository.findByRestaurant(restaurantId);
		expect(stock.restaurantId).toEqual(restaurantId);
	});

	test('Não deve criar um novo estoque se não existir uma pizzaria', async () => {
		//Criação do input de entrada
		const inputCreateStock: CreateStockCommand = new CreateStockCommand('');

		//Criação do Repository e execução do caso de Uso
		const stockRepository: InMemoryStockRepository = new InMemoryStockRepository();
		const createStock: CreateStock = new CreateStock(stockRepository);
		await expect(() => createStock.execute(inputCreateStock)).rejects.toThrow(new Error('Stock not created, invalid restaurant'));
	});
});