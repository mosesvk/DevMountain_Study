const creds = require('./credentials');
const userData = require('./userData');
module.exports = {
  login(req, res) {
    const { email, password } = req.body;
    if (email === creds.email && password === creds.password) {
      req.session.user = userData;
      res.status(200).send({ loggedIn: true })
    } else {
      res.status(401).send({ loggedIn: false })
    }
  },
  logout(req, res) {
    req.session.destroy();
    res.redirect('http://localhost:3000')
  },
  userData(req, res) {
    const { user } = req.session;
    if (user) return res.status(200).send({ loggedIn: true, user });
    else return res.sendStatus(401)
  }
}