import express from "express";
import AppoController from "../controllers/AppoController.js";


class UserRouter {
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router
      .get('/', (req,res) => {
        res.render('index')
      })
      .post('/create', AppoController.create)
      .get('/cadastro', (req,res) => {
         res.render('create')
      })
      .get('/getcalendar', AppoController.getMany)
      // .post("/", userController.create)
      // .put("/:id", userController.update)
      // .delete("/:id", userController.delete);
  }
}

export default new UserRouter().router;