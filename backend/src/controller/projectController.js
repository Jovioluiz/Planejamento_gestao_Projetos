const UserModel = require('../models/user');
const ResidenciaModel = require('../models/residencia');
const AtendimentoModel = require('../models/atendimento');

const ObjectId = require('mongoose').Types.ObjectId;

const teste = async (req, res) => { //teste autenticação
	const _id = req.userId;

	const user = await UserModel.findOne({ _id })

	res.send({ ok : true, user });
}

const createResidencia = async (req, res) => {
    const { cpf, nome, idUser, idBairro, cep, endereco, numero, complemento, latitude, longitude} = req.body;
	const fl_ativo = true;

    if (await ResidenciaModel.findOne({ cpf, fl_ativo }) )
        return res.status(400).send({ error : 'User already exists'});

	ResidenciaModel.create({ cpf, nome, fl_ativo, idUser, idBairro, cep, endereco, numero, complemento, latitude, longitude });

    return res.status(201).json();
}

const getResidencia = async (req, res) => {
    const { cpf } = req.params;
	const fl_ativo = true;
         
    const residencia = await ResidenciaModel.findOne( { cpf, fl_ativo } );

    return res.json(residencia);
}

const createAtendimento = async (req, res) => {
    const {idUser, idResidencia, cpf, nivel, idDoenca, descricao, retornoEstipulado} = req.body;

	AtendimentoModel.create({idUser, idResidencia, cpf, nivel, idDoenca, descricao, retornoEstipulado});

    return res.status(201).json();
}

const getAtendimento = async (req, res) => {
    const { cpf } = req.params;

    const atendimento = await AtendimentoModel.find( { cpf } );

    return res.json(atendimento);
}

module.exports = {
	teste,
	createResidencia,
	getResidencia,
	createAtendimento,
	getAtendimento
}