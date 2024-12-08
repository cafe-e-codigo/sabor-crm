export class CalculateSalePrice {
  constructor() {}

  calculate(infoProduct: { costPrice: number; percentageApplied: number }): number {
    return parseFloat(
      (infoProduct.costPrice + (infoProduct.costPrice * infoProduct.percentageApplied) / 100).toFixed(2),
    );
  }
}
