export default class Name {
  private readonly _value: string;

  constructor(name: string) {
    if (!name || !name.match(/[a-zA-Z] [a-zA-Z]+/)) throw new Error('Invalid name');
    this._value = name;
  }

  get value(): string {
    return this._value;
  }
}
