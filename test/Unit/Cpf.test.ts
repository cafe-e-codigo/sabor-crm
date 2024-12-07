import Cpf from "../../src/Domain/ValueObject/Cpf";

describe('[Unit]: Validação de um CPF', () => {
	test('Deve Validar um CPF válido', () => {
		const cpf = new Cpf('548.278.430-40');
		expect(cpf.value).toEqual('54827843040');
	});

	test('Deve falhar ao passar um CPF com um tamanho incorreto', () => {
		expect(() => new Cpf('548.278.430-4')).toThrowError('Invalid CPF');
	});

	test('Deve falhar se todos os caracteres forem iguais', () => {
		expect(() => new Cpf('111.111.111-11')).toThrowError('Invalid CPF');
	});

	test('Deve falhar ao passar um CPF com caracteres não numéricos', () => {
		expect(() => new Cpf('548.278.abc-40')).toThrowError('Invalid CPF');
	});

	test('Deve falhar ao passar um valor null ou undefined', () => {
		expect(() => new Cpf(null as unknown as string)).toThrowError('Invalid CPF');
		expect(() => new Cpf(undefined as unknown as string)).toThrowError('Invalid CPF');
	});
});