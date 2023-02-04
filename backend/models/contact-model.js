const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Appointments = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Number, required: true },
    contact: { type: [String], required: true },
    time: { type: Number, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('appt', Appointments)