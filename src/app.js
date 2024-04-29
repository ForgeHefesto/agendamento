import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/index.js";

class App {
  constructor() {
    this.app = express();
    this.app.set('view engine', 'ejs')
    mongoose.connect("mongodb://localhost:27017/agendamento")
    this.middlewares();
  }

  middlewares() {
    this.app.use(express.static('public'));

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());


    this.app.use(router);
  }

}

export default new App().app;
