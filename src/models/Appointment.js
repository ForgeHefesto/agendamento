import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
  },
  cpf: {
    type: String,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
  },
  finished: {
    type: Boolean,
    default: false
  }
});

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);

export default AppointmentModel;

