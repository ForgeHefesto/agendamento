export default class BaseRepository {
  /**
   * @constructor
   * @param {Model} model
   */
  constructor(model) {
    this.model = model;
  }
  /**
   * Create a document
   * 
   * @memberof BaseRepository
   * @param {object} model 
   * @returns {object}
   */
  async create(model) {
    return this.model.create(model);
  }

  async getMany(params) {
    return this.model.find(params);
  }
}