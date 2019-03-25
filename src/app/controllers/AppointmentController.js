const { User, Appointment } = require("../models");

class AppointmentController {
  async create(req, res) {
    const provider = await User.findByPk(req.params.provider);

    return res.render("appointments/create", { provider });
  }

  async store(req, res) {
    const { id } = req.session.user;
    const { date } = req.body;
    const provider_id = JSON.parse(req.params.provider);

    await Appointment.create({
      user_id: id,
      provider_id,
      date,
    });

    return res.redirect("/app/dashboard");
  }
}

module.exports = new AppointmentController();
