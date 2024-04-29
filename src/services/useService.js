import BaseService from "./baseService.js";
import UserRepository from "../repositories/userRepository.js";
import AppointmentFactory from "../factories/appointmentFactory.js"

class UserService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(UserRepository,AppointmentFactory);
  }
}

export default new UserService();