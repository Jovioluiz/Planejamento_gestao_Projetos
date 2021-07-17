const UserModel = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function genereteToken (params = {}){
	return jwt.sign( params, authConfig.secret, {
		expiresIn: 86400,
	});
}

const getUser = async (req, res) => {
    const { userId } = req.params;
     
    if (!ObjectId.isValid(userId)) return res.status(400).json( {message: 'Invalid params'} );
    
    const user = await UserModel.findById(userId);

    return res.json(user);
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (await UserModel.findOne({ email }))
        return res.status(400).send({ error : 'User already exists'});

    UserModel.create({ name, email, password });

    return res.status(201).json();
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select('+password');

	if(!user)
		return res.status(400).send({ error: 'User not found' });

    if(!await bcrypt.compare(password, user.password))
		return res.status(400).send({ error : 'Incorrect password' });
    
    user.password = undefined;
   
    res.send({
        user, 
        token: genereteToken({ id: user.id})  
    });	
}

module.exports = {
    getUser,
    createUser,
    loginUser
}