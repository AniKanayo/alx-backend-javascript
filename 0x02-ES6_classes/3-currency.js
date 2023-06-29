export default class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.setCode(code);
    this.setName(name);
  }

  getCode() {
    return this._code;
  }

  setCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  getName() {
    return this._name;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
