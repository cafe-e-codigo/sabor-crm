import {CreateRestaurantCommand} from "../../Application/Command/CreateRestaurantCommand";
import Name from "../ValueObject/Name";
import Cnpj from "../ValueObject/Cnpj";

export class Restaurant {
	private constructor(
		private readonly _id: string,
		private readonly _name: Name,
		private readonly _address: string,
		private readonly _email: string,
		private readonly _phone: string,
		private readonly _description: string,
		private readonly _category: string,
		private readonly _website: string,
		private readonly _openingHours: string,
		private readonly _cnpj: Cnpj
	) {
		if (!_name) {
			throw new Error('Invalid name');
		}
	}

	static create(createCommand: CreateRestaurantCommand): Restaurant {
		const id: string = crypto.randomUUID();
		return new Restaurant(
			id,
			new Name(createCommand.name),
			createCommand.address,
			createCommand.email,
			createCommand.phone,
			createCommand.description,
			createCommand.category,
			createCommand.website,
			createCommand.openingHours,
			new Cnpj(createCommand.cnpj)
		);
	}

	static restore(restore: {
		id: string,
		name: string,
		address: string,
		email: string,
		phone: string,
		description: string,
		category: string,
		website: string,
		openingHours: string,
		cnpj: string
	}): Restaurant {
		return new Restaurant(
			restore.id,
			new Name(restore.name),
			restore.address,
			restore.email,
			restore.phone,
			restore.description,
			restore.category,
			restore.website,
			restore.openingHours,
			new Cnpj(restore.cnpj)
		);
	}

	get id(): string {
		return this._id;
	}

	get name(): string {
		return this._name.value;
	}

	get address(): string {
		return this._address;
	}

	get email(): string {
		return this._email;
	}

	get phone(): string {
		return this._phone;
	}

	get description(): string {
		return this._description;
	}

	get category(): string {
		return this._category;
	}

	get website(): string {
		return this._website;
	}

	get openingHours(): string {
		return this._openingHours;
	}

	get cnpj(): string {
		return this._cnpj.value;
	}
}