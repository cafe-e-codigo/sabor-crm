import Cnpj from "../../src/Domain/ValueObject/Cnpj";

describe('[Unit]: Validação de um CNPJ', () => {
	test('Deve Validar um CNPJ válido', () => {
		const cnpj = new Cnpj('43.872.171/0001-13');
		expect(cnpj.value).toEqual('43872171000113');
	});

	test('Deve falhar ao passar um CNPJ com um tamanho incorreto', () => {
		expect(() => new Cnpj('12.123.456/0001')).toThrowError('Invalid CNPJ');
	});

	test('Deve falhar se todos os caracteres forem iguais', () => {
		expect(() => new Cnpj('11.111.111/1111-11')).toThrowError('Invalid CNPJ');
	});

	test('Deve falhar ao passar um CNPJ com caracteres não numéricos', () => {
		expect(() => new Cnpj('12.123.4ab/0001-72')).toThrowError('Invalid CNPJ');
	});

	test('Deve falhar ao passar um valor null ou undefined', () => {
		expect(() => new Cnpj(null as unknown as string)).toThrowError('Invalid CNPJ');
		expect(() => new Cnpj(undefined as unknown as string)).toThrowError('Invalid CNPJ');
	});
});