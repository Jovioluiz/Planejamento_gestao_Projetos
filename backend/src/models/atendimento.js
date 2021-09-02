const mongoose = require('mongoose');

const AtendimentosSchema = new mongoose.Schema({
    idUser: mongoose.Types.ObjectId,
    idResidencia: mongoose.Types.ObjectId,
    cpf: Number,
    nivel: String,
    idDoenca: String,
    descricao: String,
    retornoEstipulado: Date,
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('atendimentos', AtendimentosSchema);