import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);