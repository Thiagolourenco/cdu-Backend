import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(401).json({ error: 'E-mail já existe' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

module.exports = new UserController();
