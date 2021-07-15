const UserModel = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

const getUser = async (req, res) => {
    const { userId } = req.params;
     
    if (!ObjectId.isValid(userId)) return res.status(400).json( {message: 'Invalid params'} );
    
    const user = await UserModel.findById(userId);

    return res.json(user);
}

const createUser = async (req, res) => {

    const { name, email, password } = req.body;

    if (await UserModel.findOne({ email }))
        return res.status(400).send({ error : 'Usuário Já Existe'});

    UserModel.create({ name, email, password });

    return res.status(201).json();
}

module.exports = {
    getUser,
    createUser,
}