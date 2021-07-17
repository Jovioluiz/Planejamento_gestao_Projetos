const UserModel = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

const teste = async (req, res) => {
	const _id = req.userId;

	const user = await UserModel.findOne({ _id })

	res.send({ ok : true, user });
};

module.exports = {
	teste
}