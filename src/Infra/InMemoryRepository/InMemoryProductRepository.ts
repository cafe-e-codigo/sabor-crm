import { ProductRepository } from '../../Application/Repository/ProductRepository';
import { Product } from '../../Domain/Entitity/Product';

export class InMemoryProductRepository implements ProductRepository {
  private readonly products: any;

  constructor() {
    this.products = [];
  }

  async save(product: Product): Promise<void> {
    this.products.push({
      id: product.id,
      restaurant_id: product.restaurantId,
      stock_id: product.stockId,
      title: product.title,
      sku: product.SKU,
      internal_code: product.internalCode,
      description: product.description,
      supplier: product.supplier,
      uom: product.UoM,
      expiration_date: product.expirationDate,
      dimensions_and_weight: product.dimensionsAndWeight,
      purchase_date: product.purchaseDate,
      status: product.status,
      costPrice: product.costPrice,
    });
  }

  async findByRestaurant(restaurantId: string): Promise<Product[]> {
    const productsData: any = this.products.filter((product: any) => product.restaurant_id === restaurantId);
    const products: any = [];
    for (const productData of productsData) {
      products.push(
        Product.restore(
          productData.id,
          productData.restaurant_id,
          productData.stock_id,
          productData.title,
          productData.sku,
          productData.internal_code,
          productData.description,
          productData.supplier,
          productData.uom,
          productData.expiration_date,
          productData.dimensions_and_weight,
          productData.purchase_date,
          productData.status,
          productsData.costPrice,
        ),
      );
    }
    return products;
  }

  async findByStock(stockId: string): Promise<Product[]> {
    const productsData: any = this.products.filter((product: any) => product.stock_id === stockId);
    const products: any = [];
    for (const productData of productsData) {
      products.push(
        Product.restore(
          productData.id,
          productData.restaurant_id,
          productData.stock_id,
          productData.title,
          productData.sku,
          productData.internal_code,
          productData.description,
          productData.supplier,
          productData.uom,
          productData.expiration_date,
          productData.dimensions_and_weight,
          productData.purchase_date,
          productData.status,
          productData.costPrice,
        ),
      );
    }
    return products;
  }

  async find(id: string): Promise<Product> {
    const productData: any = this.products.filter((product: any) => product.id === id)[0];
    return Product.restore(
      productData.id,
      productData.restaurant_id,
      productData.stock_id,
      productData.title,
      productData.sku,
      productData.internal_code,
      productData.description,
      productData.supplier,
      productData.uom,
      productData.expiration_date,
      productData.dimensions_and_weight,
      productData.purchase_date,
      productData.status,
      productData.constPrice,
    );
  }

  async findAll(): Promise<Product[]> {
    const products: any = [];
    for (const productData of this.products) {
      products.push(
        Product.restore(
          productData.id,
          productData.restaurant_id,
          productData.stock_id,
          productData.title,
          productData.sku,
          productData.internal_code,
          productData.description,
          productData.supplier,
          productData.uom,
          productData.expiration_date,
          productData.dimensions_and_weight,
          productData.purchase_date,
          productData.status,
          productData.costPrice,
        ),
      );
    }
    return products;
  }
}
