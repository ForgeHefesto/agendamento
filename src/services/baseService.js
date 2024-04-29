import mongoose from 'mongoose'

export default class BaseService {
  constructor(repository, factories) {
    this.repository = repository,
    this.factories = factories
  }

  async Create(model){
    console.log(model)
    return this.repository.create(model)
  }

  async GetMany(showFinish){
    if(showFinish) {
      return this.repository.getMany({"finished": showFinish})
    }
    else {
      var appos = await this.repository.getMany()
      var appointments = []


      appos.forEach(appointment => {
        if (appointment.date != undefined) {
          appointments.push(this.factories.build(appointment))
        }
      })
      return appointments
    }
  }
}
