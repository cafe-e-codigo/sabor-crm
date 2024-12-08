import {CreateProductCommand} from "../../src/Application/Command/CreateProductCommand";
import {fakerPT_BR as faker} from "@faker-js/faker";

describe('[Unit]: Criação de um comando pra criação e edição de um produto', () => {
  test('Deve construir um comando de um produto', () => {
	expect((): CreateProductCommand => new CreateProductCommand({
	  restaurantId: crypto.randomUUID(),
	  stockId: crypto.randomUUID(),
	  title: faker.commerce.product(),
	  sku: 'PRODUCT-01-NORMAL',
	  internalCode: faker.commerce.isbn(),
	  description: faker.commerce.productDescription(),
	  supplier: 'Compra direta',
	  UoM: faker.commerce.productAdjective(),
	  expirationDate: String(faker.date.recent()),
	  dimensionsAndWeight: '',
	  purchaseDate: String(faker.date.soon()),
	  status: 'active',
	  costPrice: faker.commerce.price(),
		percentageApplied: 90,
	})).toBeDefined();
  });

  test('Não deve construir um comando de um produto sem um id de restaurante', () => {
	expect((): CreateProductCommand => new CreateProductCommand({
	  restaurantId: '',
	  stockId: crypto.randomUUID(),
	  title: faker.commerce.product(),
	  sku: 'PRODUCT-01-NORMAL',
	  internalCode: faker.commerce.isbn(),
	  description: faker.commerce.productDescription(),
	  supplier: 'Compra direta',
	  UoM: faker.commerce.productAdjective(),
	  expirationDate: String(faker.date.recent()),
	  dimensionsAndWeight: '',
	  purchaseDate: String(faker.date.soon()),
	  status: 'active',
	  costPrice: faker.commerce.price(),
		percentageApplied: 90,
	})).toThrow(new Error('Invalid restaurantId'));
  });

  test('Não deve construir um comando de um produto sem um id de estoque', () => {
	expect((): CreateProductCommand => new CreateProductCommand({
	  restaurantId: crypto.randomUUID(),
	  stockId: '',
	  title: faker.commerce.product(),
	  sku: 'PRODUCT-01-NORMAL',
	  internalCode: faker.commerce.isbn(),
	  description: faker.commerce.productDescription(),
	  supplier: 'Compra direta',
	  UoM: faker.commerce.productAdjective(),
	  expirationDate: String(faker.date.recent()),
	  dimensionsAndWeight: '',
	  purchaseDate: String(faker.date.soon()),
	  status: 'active',
	  costPrice: faker.commerce.price(),
		percentageApplied: 90,
	})).toThrow(new Error('Invalid stockId'));
  });

  test('Não deve construir um comando de um produto sem um titulo do produto', () => {
	expect((): CreateProductCommand => new CreateProductCommand({
	  restaurantId: crypto.randomUUID(),
	  stockId: crypto.randomUUID(),
	  title: '',
	  sku: 'PRODUCT-01-NORMAL',
	  internalCode: faker.commerce.isbn(),
	  description: faker.commerce.productDescription(),
	  supplier: 'Compra direta',
	  UoM: faker.commerce.productAdjective(),
	  expirationDate: String(faker.date.recent()),
	  dimensionsAndWeight: '',
	  purchaseDate: String(faker.date.soon()),
	  status: 'active',
	  costPrice: faker.commerce.price(),
		percentageApplied: 90,
	})).toThrow(new Error('Invalid title'));
  });

  test('Não deve construir um comando de um produto sem um código interno do produto', () => {
	expect((): CreateProductCommand => new CreateProductCommand({
	  restaurantId: crypto.randomUUID(),
	  stockId: crypto.randomUUID(),
	  title: faker.commerce.productName(),
	  sku: 'PRODUCT-01-NORMAL',
	  internalCode: '',
	  description: faker.commerce.productDescription(),
	  supplier: 'Compra direta',
	  UoM: faker.commerce.productAdjective(),
	  expirationDate: String(faker.date.recent()),
	  dimensionsAndWeight: '',
	  purchaseDate: String(faker.date.soon()),
	  status: 'active',
	  costPrice: faker.commerce.price(),
		percentageApplied: 90,
	})).toThrow(new Error('Invalid internalCode'));
  });
});