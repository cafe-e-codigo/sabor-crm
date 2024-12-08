import {CreateProductCommand} from "../../Application/Command/CreateProductCommand";
import * as crypto from "node:crypto";

export class Product {
  private constructor(
	  private readonly _id: string,
	  private readonly _restaurantId: string,
	  private readonly _stockId: string,
	  private readonly _title: string,
	  private readonly _SKU: string,
	  private readonly _internalCode: string,
	  private readonly _description: string,
	  private readonly _supplier: string,
	  private readonly _UoM: string,
	  private readonly _expirationDate: string,
	  private readonly _dimensionsAndWeight: string,
	  private readonly _purchaseDate: string,
	  private readonly _status: string,
	  private readonly _costPrice: number
  ) {
  }

  static create(command: CreateProductCommand): Product {
	const id: string = crypto.randomUUID();
	return new Product(
	  id,
	  command.params.restaurantId,
	  command.params.stockId,
	  command.params.title,
	  command.params.sku,
	  command.params.internalCode,
	  command.params.description,
	  command.params.supplier,
	  command.params.UoM,
	  command.params.expirationDate,
	  command.params.dimensionsAndWeight,
	  command.params.purchaseDate,
	  command.params.status,
	  parseFloat(command.params.costPrice)
	);
  }

  static restore(
		id: string,
		restaurantId: string,
		stockId: string,
		title: string,
		sku: string,
		internalCode: string,
		description: string,
		supplier: string,
		UoM: string,
		expirationDate: string,
		dimensionsAndWeight: string,
		purchaseDate: string,
		status: string,
		costPrice: number
  ): Product {
	return new Product(
	  id,
	  restaurantId,
	  stockId,
	  title,
	  sku,
	  internalCode,
	  description,
	  supplier,
	  UoM,
	  expirationDate,
	  dimensionsAndWeight,
	  purchaseDate,
	  status,
	  costPrice
	);
  }

  get id(): string {
	  return this._id;
  }

  get restaurantId(): string {
	  return this._restaurantId;
  }

  get stockId(): string {
	  return this._stockId;
  }

  get title(): string {
	  return this._title;
  }

  get SKU(): string {
	  return this._SKU;
  }

  get internalCode(): string {
	  return this._internalCode;
  }

  get description(): string {
	  return this._description;
  }

  get supplier(): string {
	  return this._supplier;
  }

  get UoM(): string {
	  return this._UoM;
  }

  get expirationDate(): string {
	  return this._expirationDate;
  }

  get dimensionsAndWeight(): string {
	  return this._dimensionsAndWeight;
  }

  get purchaseDate(): string {
	  return this._purchaseDate;
  }

  get status(): string {
	  return this._status;
  }

  get costPrice(): number {
	return this._costPrice;
  }
}