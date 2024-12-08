export class CreateProductCommand {
  constructor(
    readonly params: {
      restaurantId: string;
      stockId: string;
      title: string;
      sku: string;
      internalCode: string;
      description: string;
      supplier: string;
      UoM: string;
      expirationDate: string;
      dimensionsAndWeight: string;
      purchaseDate: string;
      status: string;
      costPrice: string;
    },
  ) {
    if (!params.restaurantId) throw new Error('Invalid restaurantId');
    if (!params.stockId) throw new Error('Invalid stockId');
    if (!params.title) throw new Error('Invalid title');
    if (!params.internalCode) throw new Error('Invalid internalCode');
  }
}
