import {CalculateSalePrice} from "../../src/Domain/Service/CalculateSalePrice";

describe('[Unit]: Calculadora de preço final para venda de produtos', () => {
  test('O valor final de um produto que custou R$7,50 deve ter uma margem de 98%', () => {
		const input: {costPrice: number, percentageApplied: number} = {costPrice: 7.70, percentageApplied: 90}
		const calculateSalePrice: CalculateSalePrice = new CalculateSalePrice();
		const salePrice: number = calculateSalePrice.calculate(input);
		expect(salePrice).toEqual(14.63)
  });
});