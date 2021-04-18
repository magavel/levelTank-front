export default class Value {
  /**
   *
   * @param {string} id
   * @param {string} idCapteur
   * @param {number} value
   */
  constructor({ id, idCapteur, value }) {
    // eslint-disable-next-line no-underscore-dangle
    this._id = id;
    this._idCapteur = idCapteur;
    this._value = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get idCapteur() {
    return this._idCapteur;
  }

  set idCapteur(value) {
    this._idCapteur = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
}
