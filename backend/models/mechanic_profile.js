const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  address: { type: String },
  coordinates: {
    mech_lat: { type: Number },
    mech_long: { type: Number },
  },
  mechanic_id: { type: String },
  location: { type: String },
  active_requests: [
    {
      name: { type: String },
      phone: { type: String },
      vehicle_type: [{ type: String }],
      location: { type: String },
      coordinates: {
        user_lat: { type: Number },
        user_long: { type: Number },
      },
      wheelsAndTyres: {
        request_type: [{ type: String }],
      },
      engine: {
        request_type: [{ type: String }],
      },
      fuel: {
        request_type: [{ type: String }],
      },
      service_active: { type: Boolean, default: true },
    },
  ],
});

module.exports = mongoose.model("Mechanic Profile", schema);
