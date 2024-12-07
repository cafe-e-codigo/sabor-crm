export class CreateRestaurantCommand {
	constructor(
		readonly name: string,
		readonly address: string,
		readonly email: string,
		readonly phone: string,
		readonly description: string,
		readonly category: string,
		readonly website: string,
		readonly openingHours: string,
		readonly cnpj: string
	) {
	}
}