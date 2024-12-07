import {CreateProductCommand} from "../../src/Application/Command/CreateProductCommand";
import {InMemoryProductRepository} from "../../src/Infra/InMemoryRepository/InMemoryProductRepository";
import CreateProduct from "../../src/Application/UseCase/Product/CreateProduct";
import {Product} from "../../src/Domain/Entitity/Product";
import {fakerPT_BR as faker} from "@faker-js/faker";

describe('[Integration]: Criação de produtos', (): void => {
  test('Deve criar um novo produto dentro de um estoque', async () => {
	//Criação do input de entrada
	const inputCreateProduct = new CreateProductCommand({
	  restaurantId: crypto.randomUUID(), // ID da Pizzaria
	  stockId: crypto.randomUUID(), // ID do Estoque
	  title: faker.commerce.product(), // Titulo do produto
	  sku: 'PRODUCT-01-NORMAL', // Unidade de manutenção do estoque
	  internalCode: faker.commerce.isbn(), // Código interno
	  description: faker.commerce.productDescription(), // Descrição
	  supplier: 'Compra direta', // Fornecedor
	  UoM: faker.commerce.productAdjective(), // Unidade média
	  expirationDate: String(faker.date.recent()), // Validade
	  dimensionsAndWeight: '', // Altura X Largura X profundidade X Peso
	  purchaseDate: String(faker.date.soon()), // Data da compra
	  status: 'active', // Status do produto,
	  costPrice: faker.commerce.price(), // Preço de custo
	});

	//Criação do Repository e execução do UseCase de criação de um produto.
	const productRepository: InMemoryProductRepository = new InMemoryProductRepository();
	const createProduct: CreateProduct = new CreateProduct(productRepository);
	await createProduct.execute(inputCreateProduct);
	expect(createProduct).toBeDefined();

	//Verifico se o dado foi persistido no banco
	const product: Product[] = await productRepository.findByStock(inputCreateProduct.params.stockId);
	expect(product[0].restaurantId).toEqual(inputCreateProduct.params.restaurantId);
	expect(product[0].stockId).toEqual(inputCreateProduct.params.stockId);
	expect(product[0].title).toEqual(inputCreateProduct.params.title);
	expect(product[0].SKU).toEqual(inputCreateProduct.params.sku);
	expect(product[0].internalCode).toEqual(inputCreateProduct.params.internalCode);
	expect(product[0].description).toEqual(inputCreateProduct.params.description);
	expect(product[0].supplier).toEqual(inputCreateProduct.params.supplier);
	expect(product[0].UoM).toEqual(inputCreateProduct.params.UoM);
	expect(product[0].expirationDate).toEqual(inputCreateProduct.params.expirationDate);
	expect(product[0].dimensionsAndWeight).toEqual(inputCreateProduct.params.dimensionsAndWeight);
	expect(product[0].purchaseDate).toEqual(inputCreateProduct.params.purchaseDate);
	expect(product[0].status).toEqual(inputCreateProduct.params.status);
	expect(product[0].costPrice).toEqual(parseFloat(inputCreateProduct.params.costPrice));
  });
});