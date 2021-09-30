const mongoose = require('mongoose');

const AtendimentosSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
		require: true,
	},
    idResidencia: {
        type: mongoose.Types.ObjectId,
		require: true,
	},
    cpf: {
        type: Number,
        require: true
    },
    nivel: {
		type: String,
		require: true,
	},
    idDoenca: {
        type: mongoose.Types.ObjectId,
	},
    descricao: {
		type: String,
		require: true,
	},
    retornoEstipulado: {
		type: Date,
		default: Date.now
	}
}, { timestamps: { createdAt: 'createdAt' } });

const Atendimento = mongoose.model('Atendimentos', AtendimentosSchema);

module.exports = Atendimento;