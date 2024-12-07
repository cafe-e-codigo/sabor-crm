import {CalculateSalePrice} from "../../src/Domain/Service/CalculateSalePrice";

describe('[Unit]: Calculadora de preço final para venda de produtos', () => {
  test('O valor final de um produto que custou R$7,50 deve ter uma margem de 98%', () => {
	const input: {costPrice: number, percentageApplied: number} = {costPrice: 7.70, percentageApplied: 90}
	const calculatePurchasePrice: CalculateSalePrice = new CalculateSalePrice();
	const purchasePrice: number = calculatePurchasePrice.calculate(input);
	expect(purchasePrice).toEqual(14.63)
  });
});