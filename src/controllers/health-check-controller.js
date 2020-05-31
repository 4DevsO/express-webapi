class HealthCheckController {
  async ping(_, res) {
    return res.send({ ok: 'OK' });
  }
}

module.exports = new HealthCheckController();
