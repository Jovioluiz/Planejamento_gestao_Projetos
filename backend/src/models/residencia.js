const mongoose = require('mongoose');

const ResidenciaSchema = new mongoose.Schema({
    cpf: Number,
    nome: String,
    fl_ativo: Boolean,
    idUser: mongoose.Types.ObjectId,
    local: [{
        idBairro: Number,
        cep: String,
        endereco: String,
        numero: String,
        complemento: String,
    }]
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('residencia', ResidenciaSchema);