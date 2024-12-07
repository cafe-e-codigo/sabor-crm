import Name from "../../src/Domain/ValueObject/Name";

describe('[Unit]: Validação de nome', () => {
	test('Deve criar um novo nome', async () => {
		expect(new Name('Pizzaria Delícia').value).toEqual('Pizzaria Delícia');
	});

	test('Não deve criar um nome se ele não for composto', async () => {
		expect(() => new Name('Pizzaria')).toThrow(new Error('Invalid name'));
	});
});