import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não existe' });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: 'Senha invalida' });
    }

    const { _id, name, admin } = user;

    return res.json({
      user: {
        _id,
        name,
        email,
        admin,
      },
      token: User.gerateToken(user),
    });
  }
}

module.exports = new SessionController();
