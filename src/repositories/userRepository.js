import BaseRepository from "./baseRepository.js";
import UserModel from "../models/Appointment.js";

class UserRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(UserModel);
  }
}

export default new UserRepository();