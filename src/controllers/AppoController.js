import userService from '../services/useService.js'


class AppoController {
  async create(req,res) {
    try {
      const appointment = await userService.Create(req.body)
      if(appointment){
        res.redirect("cadastro")
      }
    } catch (error) {
      res.status(400).json(error)
    }

  }
  async getMany(req, res) {
    try {
      const appointments = await userService.GetMany(false)
      
      res.status(200).json(appointments)

    } catch (error) {
      res.status(400).json(error)
    }
  }
}

export default new AppoController();