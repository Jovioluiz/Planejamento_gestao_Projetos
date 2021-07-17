const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader)
		return res.status(401).send({ error : 'Token not found' });

	const parts = authHeader.split (' ');

	if (!parts.lenght === 2)
		return res.status(401).send({ error : 'Token Error' });

	const [ scheme, token ] = parts;

	if (!/^bearer$/i.test(scheme))
		return res.status(401).send({ error : 'Token malformated' });

	jwt.verify(token, authConfig.secret, (err, decoded) => {
		if (err) return res.status(401).send({ error : 'Invalid Token' });

		req.userId = decoded.id;
		return next();
	})

};