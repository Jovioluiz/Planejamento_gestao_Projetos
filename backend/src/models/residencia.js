const mongoose = require('mongoose');

const ResidenciaSchema = new mongoose.Schema({

    cpf:{
        type: Number,
        require: true
    },
    nome: {
		type: String,
		require: true,
	},
    fl_ativo: {
		type: Boolean,
		require: true
	},
    idUser: {
        type: mongoose.Types.ObjectId,
		require: true,
    },
    idBairro: {
        type: mongoose.Types.ObjectId,
    },
    cep: {
        type: Number,
        require: true
    },
    endereco: {
        type: String,
        require: true,
    },
    numero: {
        type: String,
        require: true,
    },
    complemento: {
        type: String,
    }
}, { timestamps: { createdAt: 'createdAt' } });

const Residencia = mongoose.model('Residencias', ResidenciaSchema);

module.exports = Residencia;